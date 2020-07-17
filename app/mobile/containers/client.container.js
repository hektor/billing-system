import {useRouter} from 'next/router'
import Query from '../apollo/query'
import { GET_CLIENT } from '../apollo'
import { Header } from '../components'

export default () => (
	<Query query={GET_CLIENT} id={useRouter().query.id}>
		{({client}) => {
			const {name, phone, address, logs} = client
			return (
				<div className="client">
					<Header title={name} />
					<span>{phone}</span>
					<span>{JSON.stringify(address)}</span>
					<span>{JSON.stringify(logs)}</span>
				</div>
			)
		}}
	</Query>
)
