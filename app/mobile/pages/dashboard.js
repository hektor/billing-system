import {Query, GET_LATEST_LOG, GET_THIS_MONTH_LOGS} from '../apollo'
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
import {Layout, Header, BottomNav, Card, Spark} from '../components'
import {now, diffDays, calculateWorkday, timeToDecimal} from '../utils/date'
import {ACCOUNT} from '../routes'

/*
 * Overview landing page for authenticated users
 */

export default () => {
  const {user} = useContext(AuthCtx)
  const getGreeting = () =>
    user && user.name ? 'Welcome' + user.name : 'Welcome'

  const date = new Date()

  const startOfMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).toISOString()

  const currentDayInMonth = new Date().getDate()
  const daysInMonth = new Date(date.getYear(), date.getMonth(), 0).getDate()
  const progress = (currentDayInMonth / daysInMonth) * 100

  const getDayTotals = logs =>
    logs.map(
      ({
        startTime,
        endTime,
        totalBreakDuration,
        billingRate,
        distance,
        transportationCost
      }) => {
        return {
          total:
            timeToDecimal(
              calculateWorkday(
                new Date(startTime),
                new Date(endTime),
                totalBreakDuration
              )
            ) *
              billingRate +
            distance * transportationCost,
          day: new Date(startTime).getDate()
        }
      }
    )

  const getMonthTotal = dayTotals =>
    dayTotals.reduce((monthTotal, {total}) => monthTotal + total, 0)

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
        <Query
          query={GET_THIS_MONTH_LOGS}
          variables={{limit: daysInMonth, startOfMonth, sort: 'startTime:asc'}}
        >
          {({logs}) => {
            const dayTotals = getDayTotals(logs)
            const monthTotal = getMonthTotal(dayTotals)
            let values = Array(daysInMonth).fill(0)

            dayTotals.map(({day, total}) => {
              values[day - 1] = total
            })

            return logs ? (
              <Card title='This month' icon={<RiBarChartLine />}>
                {progress && progress < 95 && progress > 15 && (
                  <div className='progress-bar'>
                    <div className='progress' />
                  </div>
                )}
                <div className='highlight'>
                  <span>&euro; {monthTotal}</span>
                  <p>Total billed</p>
                </div>
                <div className='spark'>
                  <Spark length={daysInMonth} values={values} />
                </div>
              </Card>
            ) : (
              <Card title='This month' icon={<RiBarChartLine />}>
                <div className='empty'>
                  <RiClipboardLine size='32' />
                  <p>No entries yet</p>
                </div>
              </Card>
            )
          }}
        </Query>
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

          .spark {
            flex: 1;
            display: flex;
            border: 1px solid var(--color-primary-200);
            padding-top: 1.6rem;
            margin-top: 0.8rem;
            border-radius: var(--border-radius-sm);
          }

          .progress-bar {
            position: relative;
            top: -4.7rem;
            margin: 0 -1.6rem;
            display: flex;
            height: 0.4rem;
            border: 1px solid var(--color-primary-200);
            border-radius: var(--border-radius);
          }

          .progress {
            width: ${progress}%;
            background: var(--color-primary-500);
          }
        `}
      </style>
    </Layout>
  )
}
