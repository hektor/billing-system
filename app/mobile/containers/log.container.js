import {useRouter} from 'next/router'
import Query from '../apollo/query'
import { GET_LOG } from '../apollo'
import { Header } from '../components'
import { formatDate } from '../utils/date'

export default () => (
	<>
		<Query query={GET_LOG} id={useRouter().query.id}>
			{({log}) => {
				const { id, employee_id, client_id,startTime, endTime, activitiesPerformed, totalBreakDuration, resourcesUsed, billingRate, distance, transportationCost} = log
				return (
					<div className="log" key={id}>
						<Header title={formatDate(startTime)}/>
						{JSON.stringify(employee_id,0,2)}
						{JSON.stringify(client_id,0,2)}
						<span>{client_id.name}</span>
						<span>{startTime}</span>
						<span>{endTime}</span>
						<span>{totalBreakDuration} minutes</span>
						<p>{activitiesPerformed}</p>
						<p>{resourcesUsed}</p>
						<span>&euro;{billingRate}/hour</span>
						<span>{distance} km</span>
						<span>&euro;{transportationCost}/km</span>
					</div>
				)
			}}
		</Query>
		<style jsx>
			{`
        .log {
          display: flex;
          flex-direction: column;
        }
      `}
		</style>
	</>
)
