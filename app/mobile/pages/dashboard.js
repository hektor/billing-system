import Link from 'next/link'
import cookie from 'js-cookie'
import {GoPerson} from 'react-icons/go'
import {Layout, Header} from '../components'

export default () => (
	<Layout bottomNav>
		<Header title="Welcome">
			{/* FIXME: fix ssr {cookie.get('token') && */}
			<Link href="/account">
        	<a className="avatar">
        		<span>My account</span>
        		<GoPerson/>
        	</a>
			</Link>
			{/*}*/}
		</Header>
		<style jsx>
			{`
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary-300);
          padding: 1.6rem;
        }

        a > :global(.icon) {
          height: 2rem;
          width: 2rem;
        }
    `}
		</style>
	</Layout>
)
