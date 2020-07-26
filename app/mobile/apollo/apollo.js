import {ApolloClient} from 'apollo-client'
import {createHttpLink} from 'apollo-link-http'
import {setContext} from 'apollo-link-context'
import {InMemoryCache} from 'apollo-cache-inmemory'
import withApollo from 'next-with-apollo'
import fetch from 'isomorphic-unfetch'
import cookies from 'js-cookie'

import {api} from '../config'

/*
 * Set up GraphQL w/ Apollo
 */

/*
 * Set up link over http using env endpoint
 */

const httpLink = createHttpLink({
	fetch,
	uri: api.GRAPHQL,
})

/*
 * Set up request context
 */

const authLink = setContext((_, {headers}) => ({
	headers: {
		...headers,
		authorization: `Bearer ${cookies.get('token')}` || '',
	},
}))

/*
 * Set up apollo client & create higher order component
 */

export default withApollo(
	({initialState}) =>
		new ApolloClient({
			link: authLink.concat(httpLink),
			cache: new InMemoryCache().restore(initialState || {}),
		})
)
