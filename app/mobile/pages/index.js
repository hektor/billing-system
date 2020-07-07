import { useEffect } from 'react'
import { useRouter } from 'next/router' 
import { Layout } from '../components'
import cookie from 'js-cookie'
import { SIGNIN, DASHBOARD } from '../routes'

export default () => {
	const router = useRouter()

	useEffect(() => {
		cookie.get('token') ? router.push(DASHBOARD) : router.push(SIGNIN)
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

