import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'
import withData from '../apollo/apollo'
import { IconContext } from 'react-icons'

const App = ({ Component, props, apollo }) => (
	<ApolloProvider client={apollo}>
		<Head>
			<meta charSet="utf-8"/>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
			<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
			<meta name="description" content="Description"/>
			<meta name="keywords" content="Keywords"/>
			<title>Page Title</title>

			<meta name="theme-color" content="#ffffff"/>
			<link rel='manifest' href='/manifest.json' />
			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css"
			/>
			<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
		</Head>
		<IconContext.Provider value={{size: 24, className: 'icon'}}>
			<Component {...props} />
		</IconContext.Provider>
	</ApolloProvider>
)

export default withData(App)
