const withPWA = require('next-pwa')
require('dotenv').config()

module.exports = withPWA({
	/*
  * Configure next-pwa 
  */
	pwa: {
		dest: 'public'
	},
	/*
  * Add environment variables
  */
	env: {
		GRAPHQL_URL: process.env.GRAPHQL_URL,
	}
})
