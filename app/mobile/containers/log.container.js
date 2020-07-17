import { useRouter } from 'next/router'
import Query from '../apollo/query'
import { GET_LOG } from '../apollo'
import { Header } from '../components'
import { formatDate, calculateWorkday, timeToDecimal } from '../utils/date'
import { GoClock } from 'react-icons/go'
import { FaRoad, FaEquals} from 'react-icons/fa'

export default () => (
	<>
		<Query query={GET_LOG} id={useRouter().query.id}>
			{({log}) => {
				const { id, employee_id, client_id,startTime, endTime, activitiesPerformed, totalBreakDuration, resourcesUsed, billingRate, distance, transportationCost} = log
				return (
					<>
						<Header title={formatDate(startTime, 'short')} />
						<div className="log" key={id}>
							{/*JSON.stringify(employee_id,0,2)*/}
							{/*JSON.stringify(client_id,0,2)*/}
							<div className="header">
								<span>{client_id.name}</span>
								<span>
								</span>
							</div>
							<span>{startTime}</span>
							<span>{endTime}</span>
							<span>{totalBreakDuration} minutes</span>
							<p>{activitiesPerformed}</p>
							<p>{resourcesUsed}</p>
							<div className="costs">
								<div className="cost">
									<div className="amount">
										<GoClock size="48"/>
										<span>{calculateWorkday(startTime, endTime, totalBreakDuration)}</span>
									</div>
									<span className="rate">&euro;{billingRate}/hour</span>
									<span className="total">&euro;{timeToDecimal(calculateWorkday(startTime, endTime, totalBreakDuration)) * billingRate}</span>
								</div>
								<div className="cost">
									<div className="amount">
										<FaRoad size="48"/>
										<span>{distance} km</span>
									</div>
									<span className="rate">&euro;{transportationCost}/km</span>
									<span className="total">&euro;{distance * transportationCost}</span>
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
          padding: 1.6rem;
          border-bottom: 1px solid var(--color-primary-300);
        }

        .costs {
          display: flex;
          margin-top: auto;
        }

        .cost {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 1.6rem;
          border: 1px solid var(--color-primary-300)
        }

        .amount {
          font-size: 2.4rem;
          display: flex;
          flex-direction: column;
        }

        .amount > span {
          margin: 1.6rem;
        }

        .cost span {
          margin: 0.4rem 0;
        }
      `}
		</style>
	</>
)
