import { env } from '.'

const { BASE_URL } = env

export default {
	GRAPHQL: `${BASE_URL}graphql`,
	SIGNIN: `${BASE_URL}auth/local`,
	SIGNUP: `${BASE_URL}auth/local/register`
}

console.log(`${BASE_URL}auth/local`)
