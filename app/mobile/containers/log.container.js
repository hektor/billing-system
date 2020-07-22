import {useRouter} from 'next/router'
import {RiTimeLine, RiContactsBook2Line, RiPinDistanceLine, RiMoneyEuroCircleLine} from 'react-icons/ri'
import Query from '../apollo/query'
import {GET_LOG} from '../apollo'
import {Header, Button} from '../components'
import {formatDate, formatTime, calculateWorkday, timeToDecimal} from '../utils/date'



export default () => (
	<>
		<Query query={GET_LOG} id={useRouter().query.id}>
			{({log}) => {
				const { id, client_id,startTime, endTime, activitiesPerformed, totalBreakDuration, resourcesUsed, billingRate, distance, transportationCost} = log
				return (
					<>
						<Header title={formatDate(startTime, 'short')} />
						<div className="log" key={id}>
							<div className="header">
								<div className="client-name">
									<h2>{client_id.name}</h2>
									<Button onClick={() => useRouter().replace(`/clients/${client_id.id}`)} title="View client" icon={<RiContactsBook2Line size="32"/>} />
								</div>
								<span>
								</span>
							</div>
							<span>
								Worked from {`${formatTime(startTime)} until ${formatTime(endTime)}`}
							</span>
							<span>Paused for {totalBreakDuration} minutes</span>
							<p>{activitiesPerformed}</p>
							<p>{resourcesUsed}</p>
							<div className="costs">
								<div className="cost hourly-cost">
									<div className="amount">
										<RiTimeLine size="32"/>
										<span>{calculateWorkday(startTime, endTime, totalBreakDuration)}</span>
									</div>
									{/*<span className="rate">&euro;{billingRate}/hour</span>*/}
									{/*<span className="total">&euro;{timeToDecimal(calculateWorkday(startTime, endTime, totalBreakDuration)) * billingRate}</span>*/}
								</div>
								<div className="cost transport-cost">
									<div className="amount">
										<RiPinDistanceLine size="32"/>
										<span>{distance} km</span>
									</div>
									{/*<span className="rate">&euro;{transportationCost}/km</span>*/}
									{/*<span className="total">&euro;{distance * transportationCost}</span>*/}
								</div>
							</div>
							<div className="cost total-cost">
								<span>Total</span>
								<div className="amount">
									<RiMoneyEuroCircleLine size="32"/>
									<span>{timeToDecimal(calculateWorkday(startTime, endTime, totalBreakDuration)) * billingRate + distance * transportationCost}</span>
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

        .costs {
          display: flex;
          margin-top: auto;
        }

        .client-name {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .client-name > h2 {
          margin: auto auto 1.6rem 1.6rem;
        }

        .cost {
          display: flex;
          padding: 1.6rem;
          margin-bottom: 1.6rem;
          background: var(--color-primary-100);
          border-radius: var(--border-radius);
        }

        .hourly-cost { 
          margin-right: 0.8rem; 
        }

        .transport-cost { 
          margin-left: 0.8rem; 
        }

        .hourly-cost,
        .transport-cost { 
          flex: 1;
        }

        .total-cost > span {
          flex: 1;
          margin: auto 0;
          font-size: 1.6rem;
        }

        .total-cost > .amount {
          justify-content: flex-end
        }

        .amount {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 1.6rem;
        }
      `}
		</style>
	</>
)
