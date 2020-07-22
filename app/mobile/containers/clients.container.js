import Query from '../apollo/query'
import { GET_CLIENTS } from '../apollo'
import { ListItem } from '../components'

export default () => (
	<div className="list">
		<Query query={GET_CLIENTS} id={null}>
			{({clients}) =>
				clients.map(({id, name, phone}) => (
					<ListItem key={id} href={`/clients/${id}`}>
						<span>{name}</span>
						<span>{phone}</span>
					</ListItem>
				))
			}
		</Query>
	</div>
)
