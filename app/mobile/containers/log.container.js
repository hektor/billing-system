import Router, { useRouter } from 'next/router'
import {
  RiTimeLine,
  RiContactsBook2Line,
  RiPinDistanceLine,
  RiMoneyEuroCircleLine,
  RiEditLine,
} from 'react-icons/ri'
import { Query, GET_LOG } from '../apollo'
import { Header, Button, Card } from '../components'
import {
  formatDate,
  formatTime,
  calculateWorkday,
  timeToDecimal,
} from '../utils/date'
import { LOGS, CLIENTS } from '../routes'

/*
 * Log details
 */

export default () => (
  <>
    <Query query={GET_LOG} variables={{ id: Number(useRouter().query.id) }}>
      {({ log }) => {
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
          transportationCost,
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
              {/*
              <p>{activitiesPerformed}</p>
              <p>{resourcesUsed}</p>
              */}
              <div className='row'>
                <Card icon={<RiTimeLine size='32' />} title='Hours worked'>
                  <span>From {` ${formatTime(startTime)}`}</span>
                  <span>Untill {` ${formatTime(endTime)}`}</span>
                  <span>{totalBreakDuration} minutes paused</span>
                  <span>
                    <strong>
                      {calculateWorkday(startTime, endTime, totalBreakDuration)}
                    </strong>
                    {` `}
                    hours billed
                  </span>
                  {/*<span className="rate">&euro;{billingRate}/hour</span>*/}
                  {/*<span className="total">&euro;{timeToDecimal(calculateWorkday(startTime, endTime, totalBreakDuration)) * billingRate}</span>*/}
                </Card>
                <Card
                  icon={<RiPinDistanceLine size='32' />}
                  title='Distance traveled'
                >
                  <span className='distance'>{distance}km</span>
                  {/*<span className="rate">&euro;{transportationCost}/km</span>*/}
                  {/*<span className="total">&euro;{distance * transportationCost}</span>*/}
                </Card>
              </div>
              <div className='row'>
                <Card icon={<RiMoneyEuroCircleLine size='32' />} title='Total'>
                  <span>
                    {Number(
                      timeToDecimal(
                        calculateWorkday(
                          startTime,
                          endTime,
                          totalBreakDuration,
                        ),
                      ) *
                        billingRate +
                        distance * transportationCost,
                    ).toFixed(2)}
                  </span>
                </Card>
              </div>
              <div className='actions'>
                <Button
                  onClick={() => Router.replace(`${LOGS}/${id}/edit`)}
                  title='Edit log'
                  icon={<RiEditLine size='32' />}
                />
                <Button
                  primary
                  onClick={() => Router.replace(`${CLIENTS}/${client_id.id}`)}
                  title='View client'
                  icon={<RiContactsBook2Line size='32' />}
                />
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

        .row {
          flex: 1;
          display: flex;
        }

        .client-name {
          padding: 0.8rem;
        }

        .actions {
          display: flex;
          margin: 0.4rem;
        }

        .actions > :global(button) {
          flex: 1;
        }

        .actions > :global(button:first-child) {
          border-right: 0;
          border-radius: var(--border-radius) 0 0 var(--border-radius);
        }

        .actions > :global(button:last-child) {
          border-radius: 0 var(--border-radius) var(--border-radius) 0;
        }

        span {
          margin: 0.4rem 0;
        }

        .distance {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.4rem;
        }
      `}
    </style>
  </>
)
