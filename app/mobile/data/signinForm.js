import { GoMail, GoLock } from 'react-icons/go'

export const inputTypes = {
	EMAIL: 'email',
	PASSWORD: 'password'
}

const { EMAIL, PASSWORD } = inputTypes

export default {
	title: 'Get started',
	fields: [
		{
			label: 'Email',
			name: 'email',
			autoComplete: 'email',
			type: EMAIL,
			placeholder: 'Enter your email',
			icon: <GoMail/>,
			required: true
		},
		{
			label: 'Password',
			name: 'password',
			autoComplete: 'current-password',
			type: PASSWORD,
			placeholder: 'Enter your password',
			icon: <GoLock/>,
			required: true
		}
	]
}
