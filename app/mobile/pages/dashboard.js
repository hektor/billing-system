import {Query, GET_LATEST_LOG} from '../apollo'
import Link from 'next/link'
import {RiAccountCircleLine} from 'react-icons/ri'
import {useContext} from 'react'
import {AuthCtx} from './_app'
import {Layout, Header, BottomNav} from '../components'
import {now, formatDate, formatTime, diffDays} from '../utils/date'
import {ACCOUNT} from '../routes'

/*
 * Overview landing page for authenticated users
 */

export default () => {
  const {user} = useContext(AuthCtx)
  const getGreeting = () =>
    user && user.name ? 'Welcome' + user.name : 'Welcome'

  return (
    <Layout bottomNav>
      <Header title={getGreeting()}>
        <Link href={ACCOUNT}>
          <a className='avatar'>
            <span>My account</span>
            <RiAccountCircleLine size='32' />
          </a>
        </Link>
      </Header>
      {/* user && formatDate(user.lastSeen) */}
      <h2>Latest activity</h2>
      <div className='card'>
        <Query query={GET_LATEST_LOG} id={null}>
          {({logs}) => {
            const {startTime, endTime} = logs[0]
            return (
              <>
                <h3>{`${diffDays(now, startTime)} Days ago`}</h3>
                Latest work activity {formatDate(startTime)}, from{' '}
                {formatTime(startTime)} until {formatTime(endTime)}.
              </>
            )
          }}
        </Query>
      </div>
      <BottomNav />
      <style jsx>
        {`
          a {
            display: flex;
            align-items: center;
            color: var(--color-primary-300);
            padding: 1.6rem;
            transition: 0.16s;
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
