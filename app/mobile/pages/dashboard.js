import {Query, GET_LATEST_LOG} from '../apollo'
import Link from 'next/link'
import {RiAccountCircleLine} from 'react-icons/ri'
import {useContext} from 'react'
import {AuthCtx} from './_app'
import {Layout, Header, BottomNav} from '../components'
import {formatDate, formatTime} from '../utils/date'

/*
 * Overview landing page for authenticated users
 */

export default () => {
	const {user} = useContext(AuthCtx)
	const getGreeting = () => user && user.name ? 'Welcome' + user.name : 'Welcome'

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
			<p>Today is {formatDate(new Date())}</p>
			{user && formatDate(user.lastSeen)}
			<Query query={GET_LATEST_LOG} id={null}>
        {({logs}) => {
          const {startTime, endTime} = logs[0]
					return (
						<p>Your latest work activity was on {formatDate(startTime)}, from {formatTime(startTime)} until {formatTime(endTime)}.</p>
					)
				}}
			</Query>
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
