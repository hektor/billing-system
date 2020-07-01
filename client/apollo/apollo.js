import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'
import withApollo from 'next-with-apollo'
import fetch from 'isomorphic-unfetch'
import cookies from 'js-cookie'

const GRAPHQL_URL = process.env.GRAPHQL_URL || 'http://localhost:1337/graphql'

const httpLink = createHttpLink({
	fetch,
	uri: GRAPHQL_URL
})

const authLink = setContext((_, { headers }) => ({
	headers: {
		...headers,
		authorization: `Bearer ${cookies.get('token')}` || ''
	}
}))

export default withApollo(
	({ initialState }) =>
		new ApolloClient({
			link: authLink.concat(httpLink),
			cache: new InMemoryCache().restore(initialState || {})
		})
)
