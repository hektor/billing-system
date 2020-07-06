import {Layout, Header} from '../components'
import cookie from 'js-cookie'
import { GoPerson } from 'react-icons/go'
import Link from 'next/link'

export default () => (
	<Layout>
		<Header title="Welcome">
			{cookie.get('token') && 
      <Link href="/account">
      	<a className="avatar">
      		<span>My account</span>
      	  <GoPerson/>
      	</a>
      </Link>
			}
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

        span {
          padding: 0.4rem;
        }
    `}
		</style>
	</Layout>
)
