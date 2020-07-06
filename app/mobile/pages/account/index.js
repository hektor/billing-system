import Link from 'next/link'
import Router from 'next/router'
import {GoChevronLeft, GoGear, GoSignOut } from 'react-icons/go'
import { signout } from '../../auth'
import { Layout, Header, Button} from '../../components'

export default () => (
	<Layout>
		<Header title="My account">
			<a onClick={() => Router.back()}>
				<GoChevronLeft />
				<span>Back</span>
			</a>
		</Header>
		<h2>Account settings</h2>
		<Link href="/account/settings">
			<Button icon={<GoGear />}>Account settings</Button>
		</Link>
		<Button icon={<GoSignOut />} onClick={signout}>Sign out</Button>
		<style jsx>
			{`
        a {
          cursor: pointer;
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

        h2 {
          padding: 1.6rem; 
        }

        span {
          padding: 0.4rem;
        }

        :global(button) {
          margin: 0.8rem 0;
        }
    `}
		</style>
	</Layout>
)
