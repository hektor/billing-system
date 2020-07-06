import { GoMail, GoLock } from 'react-icons/go'

export const inputTypes = {
	EMAIL: 'email',
	PASSWORD: 'password'
}

const { EMAIL, PASSWORD } = inputTypes

export default {
	title: 'Settings',
	fields: [
		{
			label: 'Change email',
			name: 'newEmail',
			autoComplete: 'email',
			type: EMAIL,
			placeholder: 'Enter your email',
			icon: <GoMail/>
		},
		{
			label: 'Change password',
			name: 'newPassword',
			autoComplete: 'new-password',
			type: PASSWORD,
			placeholder: 'Enter new password',
			icon: <GoLock/>
		}
	]
}
