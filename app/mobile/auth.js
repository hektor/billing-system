import {useEffect} from 'react'
import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'

import { api } from './config'

const flattenMessages = messages => {
	let flattened = []
	messages.map(({messages}) => messages.map(({message}) => flattened.push(message)))
	return flattened
}

const handleSuccess = ({ jwt, user}) => {
	cookie.set('token', jwt, { expires: 1 })
	cookie.set('user', user, { expires: 1 })
	Router.push('/dashboard')
	return null
}

const handleInvalid = ({ /* statusCode, error, */ message}) => flattenMessages(message)

const postOptions = body => ({
	method: 'POST',
	headers: { 'Content-Type': 'application/json' },
	body: JSON.stringify(body)
})

export const signup = async ({ email, password }) => { 
	const options = postOptions({ email, password })
	const res = await (await fetch(api.SIGNIN, postOptions(options))).json()
	if (res.statusCode === 200) return handleSuccess(res)
	if (res.statusCode === 400) return handleInvalid(res)
} 

export const signin = async ({ email, password }) => {
	const options = postOptions({identifier: email, password})
	const res = await fetch(api.SIGNIN, options)
	if (res.status === 200)	return handleSuccess(await res.json())
	if (res.status === 400) return handleInvalid(await res.json())
	if (res.status === 429) return ['Too many failed signin attempts, try again later or reset password'] 
}

export const sendRecoveryLink = async ({ email }) => {
	const res = await fetch(api.FORGOT_PASSWORD, postOptions({ email }))
	if (res.status === 400) return { message: 'We could not send a recovery link at this time', type: 'warning'}
	if (res.status === 200) return { message: 'We sent a recovery link to this email address', type: 'success'}
}

export const resetPassword = async ({ password, passwordConfirmation, code }) => {
	const res = await fetch(api.RESET_PASSWORD, postOptions({ password, passwordConfirmation, code }))
	if (res.status === 400) return { message: 'This recovery link is invalid', type: 'warning'}
	if (res.status === 200) return handleSuccess(await res.json()) 
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
	Router.push('/auth/signin')
}

export const withAuthSync = Component => {
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
		return <Component {...props} />
	}

	Wrapper.getInitialProps = async ctx => {
		const token = auth(ctx)
		const componentProps = Component.getInitialProps && (await Component.getInitialProps(ctx))
		return { ...componentProps, token }
	}
	return Wrapper
}
