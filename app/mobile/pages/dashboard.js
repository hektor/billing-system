import Link from 'next/link'
import cookie from 'js-cookie'
import { GoPerson, GoClippy, GoPlus, GoOrganization } from 'react-icons/go'
import {Layout, Header} from '../components'

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
		<nav>
			<Link href="/logs">
				<a>
					<GoClippy/>
			    <span>My logs</span>
				</a>
			</Link>
			<Link href="/logs/create">
				<a className="add-log">
					<GoPlus/>
			    <span>Add log</span>
				</a>
			</Link>
			<Link href="/clients">
				<a>
					<GoOrganization/>
			    <span>My clients</span>
				</a>
			</Link>
		</nav>
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

        nav {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          margin: -1.6rem;
          padding: 1.6rem;
          margin-top: auto;
        }

        nav > a {
          flex: 1;
          text-align: center;
          flex-direction: column;
          padding: 0;
        }

        nav > a > span {
          margin-top: 0.4rem;
        }
    `}
		</style>
	</Layout>
)
