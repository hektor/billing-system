import {Query, GET_CLIENTS} from '../apollo'
import {ListItem} from '../components'
import {CLIENTS} from '../routes'

/*
 * List of clients
 */

export default () => (
	<div className="list">
		<Query query={GET_CLIENTS} id={null}>
			{({clients}) =>
        clients.map(({id, name, phone}) => (
          <ListItem key={id} href={`${CLIENTS}/${id}`}>
						<span>{name}</span>
						<span>{phone}</span>
					</ListItem>
				))
			}
		</Query>
	</div>
)
