import {Query, GET_CLIENTS} from '../apollo'
import {Dropdown} from '.'

/*
 * Client dropdown
 * Renders dropdown with clients from GraphQL query 
 */

export default props => (
	<Query query={GET_CLIENTS} id={null}>
		{({clients}) => <Dropdown {...props} options={clients.map(({name}) => name)}/>}
	</Query>
)
