import { env } from '.'

const { BASE_URL } = env

export default {
	GRAPHQL: `${BASE_URL}/graphql`,
	GET_USER: `${BASE_URL}/users/me`,
	SIGNIN: `${BASE_URL}/auth/local`,
	SIGNUP: `${BASE_URL}/auth/local/register`,
	FORGOT_PASSWORD: `${BASE_URL}/auth/forgot-password`,
	RESET_PASSWORD: `${BASE_URL}/auth/reset-password`
}
