import React from 'react'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'
import withData from '../apollo/apollo'

const App = ({ Component, pageProps, apollo }) => {
	return (
		<ApolloProvider client={apollo}>
      <Head>
        <title></title>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css"
				/>
				<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
			</Head>
			<Component {...pageProps}></Component>
		</ApolloProvider>
	)
}

export default withData(App)
