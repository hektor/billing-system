import Link from 'next/link'
import { Layout } from '../components'

/* TODO: routes from constant */
export default () => <Layout wrap row>
	<h1>Welcome</h1>
	<div>
		<Link href="auth/signin"><a>Get started</a></Link>
	</div>
	<style jsx>
		{`
      div {
        margin-top: auto;
        padding: 1.6rem 0;
        border-top: 1px solid #000;
      }
    `}
	</style>
</Layout>

