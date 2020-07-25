import Link from 'next/link'
import {RiAccountCircleLine} from 'react-icons/ri'
import {useContext} from 'react'
import {AuthCtx} from './_app'
import {Layout, Header, BottomNav} from '../components'

/*
 * Overview landing page for authenticated users
 */

export default () => {
	const {user} = useContext(AuthCtx)
	const getGreeting = () => user && user.name ? user.name : 'Welcome'
	return(
		<Layout bottomNav>
			<Header title={getGreeting()}>
				<Link href="/account">
					<a className="avatar">
						<span>My account</span>
						<RiAccountCircleLine size="32"/>
					</a>
				</Link>
			</Header>
			<BottomNav/>
			<style jsx>
				{`
        a {
          display: flex;
          align-items: center;
          color: var(--color-primary-300);
          padding: 1.6rem;
          transition: .16s;
        }

        a:hover {
          color: var(--color-primary-500);
        }

        span {
          margin-right: 0.8rem;
        }
    `}
			</style>
		</Layout>
	)
}
