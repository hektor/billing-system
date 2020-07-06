const withPWA = require('next-pwa')
require('dotenv').config()

module.exports = withPWA({
	/*
  * Configure next-pwa 
  */
	pwa: {
		dest: 'public'
	},
	env: {
		BASE_URL: process.env.BASE_URL
	}
})
