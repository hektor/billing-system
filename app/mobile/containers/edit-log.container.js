import {useRouter} from 'next/router'
import {Query, GET_LOG} from '../apollo'
import {Header, Button} from '../components'
import {
  formatDate,
  formatTime,
  calculateWorkday,
  timeToDecimal
} from '../utils/date'

/*
 * Log details
 */

export default () => (
  <>
    <Query query={GET_LOG} variables={{id: Number(useRouter().query.id)}}>
      {({log}) => {
        const {
          id,
          client_id,
          startTime,
          endTime,
          activitiesPerformed,
          totalBreakDuration,
          resourcesUsed,
          billingRate,
          distance,
          transportationCost
        } = log
        return (
          <>
            <Header title={formatDate(startTime, 'short')} />
            <div className='log' key={id}>
              <div className='header'>
                <div className='client-name'>
                  <h2>{client_id.name}</h2>
                </div>
              </div>
            </div>
          </>
        )
      }}
    </Query>
    <style jsx>
      {`
        .log {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .header {
          display: flex;
          justify-content: space-between;
          padding: 1.6rem 0;
        }

        .client-name {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .client-name > h2 {
          margin: auto auto 1.6rem 1.6rem;
        }
      `}
    </style>
  </>
)
