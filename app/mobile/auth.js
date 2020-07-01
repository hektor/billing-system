import {useEffect} from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'

export const signin = async ({ email, password }) => {
	const url = 'http://localhost:1337/auth/local'
	try {
		const res = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ identifier: email, password })
		})
		if (res.status === 200) {
			let { jwt, user } = await res.json()
			cookie.set('token', jwt, { expires: 1 })
			cookie.set('user', user, { expires: 1 })
		} else {
			throw Error(res.statusText)
		}
	} catch (error) {
		return error
	}
	Router.push('/')
}

export const auth = ctx => {
	const { token } = nextCookie(ctx)
	if (ctx.req && !token) {
		ctx.res.writeHead(302, { Location: '/signin' })
		ctx.res.end()
		return
	}
	!token && Router.push('/signin')
	return token
}

export const signout = () => {
	cookie.remove('token')
	window.localStorage.setItem('signout', Date.now().toString())
	Router.push('/signin')
}

export const withAuthSync = WrappedComponent => {
	const Wrapper = props => {
		const syncSignout = event => {
			if (event.key === 'signout') {
				console.log('logged out from storage!')
				Router.push('/signin')
			}
		}

		useEffect(() => {
			window.addEventListener('storage', syncSignout)
			return () => {
				window.removeEventListener(
					'storage',
					syncSignout
				)
				window.localStorage.removeItem('signout')
			}
		}, [])
		return <WrappedComponent {...props} />
	}

	Wrapper.getInitialProps = async ctx => {
		const token = auth(ctx)
		const componentProps =
			WrappedComponent.getInitialProps &&
			(await WrappedComponent.getInitialProps(ctx))

		return { ...componentProps, token }
	}
	return Wrapper
}
