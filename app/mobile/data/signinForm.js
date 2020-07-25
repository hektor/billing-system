import { RiAtLine, RiLockPasswordLine } from 'react-icons/ri'

/*
 * Form data for signin form
 */

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
			icon: <RiAtLine/>,
			required: true
		},
		{
			label: 'Password',
			name: 'password',
			autoComplete: 'current-password',
			type: PASSWORD,
			placeholder: 'Enter your password',
			icon: <RiLockPasswordLine/>,
			required: true
		}
	]
}
