import {Query, GET_LATEST_LOG} from '../apollo'
import Link from 'next/link'
import {
  RiFlashlightLine,
  RiAccountCircleLine,
  RiMoneyEuroCircleLine,
  RiBarChartLine,
  RiBarChartGroupedLine,
  RiClipboardLine
} from 'react-icons/ri'
import {useContext} from 'react'
import {AuthCtx} from './_app'
import {Layout, Header, BottomNav} from '../components'
import {now, diffDays} from '../utils/date'
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
      <section>
        <div className='card'>
          <Query query={GET_LATEST_LOG} id={null}>
            {({logs}) => {
              const {startTime, endTime} = logs[0]
              return (
                <>
                  <div className='card-header'>
                    <RiFlashlightLine />
                    <span>Latest activity</span>
                  </div>
                  <div className='card-body'>
                    <div className='highlight'>
                      <span>{diffDays(now, startTime)}</span>
                      <p>Days ago</p>
                    </div>
                  </div>
                </>
              )
            }}
          </Query>
        </div>
        <div className='card'>
          <div className='card-header'>
            <RiMoneyEuroCircleLine />
            <span>This week</span>
          </div>
          <div className='card-body'>
            <div className='empty'>
              <RiClipboardLine size='32' />
              <p>No entries yet</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='card'>
          <div className='card-header'>
            <RiBarChartLine />
            <span>This month</span>
          </div>
          <div className='card-body'>
            <div className='empty'>
              <RiClipboardLine size='32' />
              <p>No entries yet</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='card'>
          <div className='card-header'>
            <RiBarChartGroupedLine />
            <span>This year</span>
          </div>
          <div className='card-body'></div>
        </div>
      </section>
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

          section {
            flex: 1;
            display: flex;
          }

          .card {
            flex: 1;
            display: flex;
            flex-direction: column;
            background: var(--color-primary-100);
            color: var(--color-primary-700);
            margin: 0.4rem;
            border-radius: var(--border-radius);
          }

          .card-header {
            display: flex;
            align-items: center;
            font-size: 1.2rem;
            padding: 1.6rem;
          }

          .card-header > span {
            margin-left: 0.4rem;
          }

          .highlight {
            display: flex;
            align-items: center;
          }

          .highlight > span {
            font-size: 2.4rem;
          }

          .card-body {
            flex: 1;
            display: flex;
            padding: 0 1.6rem 1.6rem 1.6rem;
            color: var(--color-primary-600);
          }

          .empty {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: auto;
            color: var(--color-primary-300);
          }
        `}
      </style>
    </Layout>
  )
}
