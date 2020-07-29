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
import {Layout, Header, BottomNav, Card} from '../components'
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
        <Query query={GET_LATEST_LOG} id={null}>
          {({logs}) => {
            const {startTime, endTime} = logs[0]
            return (
              <Card icon={<RiFlashlightLine />} title='Latest activity'>
                <div className='highlight'>
                  <span>{diffDays(now, startTime)}</span>
                  <p>Days ago</p>
                </div>
              </Card>
            )
          }}
        </Query>
        <Card icon={<RiMoneyEuroCircleLine />} title='This week'>
          <div className='empty'>
            <RiClipboardLine size='32' />
            <p>No entries yet</p>
          </div>
        </Card>
      </section>
      <section>
        <Card title='This month' icon={<RiBarChartLine />}>
          <div className='empty'>
            <RiClipboardLine size='32' />
            <p>No entries yet</p>
          </div>
        </Card>
      </section>
      <section>
        <Card title='This year' icon={<RiBarChartGroupedLine />}>
          <div className='empty'>
            <RiClipboardLine size='32' />
            <p>No entries yet</p>
          </div>
        </Card>
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

          .highlight {
            display: flex;
            align-items: center;
          }

          .highlight > span {
            font-size: 2.4rem;
          }

          .empty {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: auto;
            color: var(--color-primary-300);
          }
        `}
      </style>
    </Layout>
  )
}
