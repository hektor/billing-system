import { useEffect } from 'react'
import { useRouter } from 'next/router' 
import { Layout } from '../components'
import cookie from 'js-cookie'

/* TODO: routes from constant */


export default () => {
	const router = useRouter()
	useEffect(() => {
		cookie.get('token') ? router.push('/dashboard') :
			router.push('/auth/signin')
	}, [])
	return (<Layout>
		<h1>Loading</h1>
		<style jsx>
			{`
      h1 {
        margin: auto;
      }
    `}
		</style>
	</Layout>
	)
}

