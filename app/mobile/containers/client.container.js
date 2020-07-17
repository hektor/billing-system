import {useRouter} from 'next/router'
import Query from '../apollo/query'
import { GET_CLIENT } from '../apollo'

export default () => (
	<Query query={GET_CLIENT} id={useRouter().query.id}>
		{({client}) => {
			const {id} = client
			return id
		}}
	</Query>
)
