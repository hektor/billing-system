import {useQuery} from '@apollo/react-hooks'
import {ListItemPlaceholder} from '../components'

export default ({children, query, id}) => {
	const {data, loading, error} = useQuery(query, {
		variables: { id: parseInt(id) }
	})

	if (loading) return [...Array(10)].map((_,id) => <ListItemPlaceholder key={id}/>)
	if (error) return <p>Error: {JSON.stringify(error)}</p>

	return children(data)
}
