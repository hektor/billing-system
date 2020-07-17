import Link from 'next/link'
import { GoPerson } from 'react-icons/go'
import { useContext } from 'react'
import {AuthCtx} from './_app'
import {Layout, Header} from '../components'

export default () => {
	const { user } = useContext(AuthCtx)
	const getGreeting = () => user && user.name ? user.name : 'Welcome'

	return(
		<Layout bottomNav>
			<Header title={getGreeting()}>
				<Link href="/account">
					<a className="avatar">
						<span>My account</span>
						<GoPerson/>
					</a>
				</Link>
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
}
