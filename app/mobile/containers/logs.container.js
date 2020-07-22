import Query from '../apollo/query'
import { GET_LOGS } from '../apollo'
import { formatDate } from '../utils/date'
import { ListItem } from '../components'

export default () => (
	<div className="list">
		<Query query={GET_LOGS} id={null}>
			{({logs}) =>
				logs.map(({id, client_id, startTime}) => (
					<ListItem key={id} href={`logs/${id}`}>
						<span>{client_id.name}</span>
						<span>{formatDate(startTime)}</span>
					</ListItem>
				))
			}
		</Query>
	</div>
)
