import { useQuery } from '@apollo/react-hooks'
import { ListItemPlaceholder } from '../components'

export default ({ children, query, variables }) => {
  const { data, loading, error } = useQuery(query, { variables })
  if (loading)
    return [...Array(10)].map((_, id) => <ListItemPlaceholder key={id} />)
  if (error) return <pre>Error: {JSON.stringify(error, null, 2)}</pre>
  return children(data)
}
