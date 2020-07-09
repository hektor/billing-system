import { GoKey, GoLock } from 'react-icons/go'

export default {
	title: 'Reset password',
	fields: [
		{
			label: 'New password',
			name: 'password',
			type: 'password',
			placeholder: 'Enter your new password',
			icon: <GoLock />,
			required: true
		}
	]
}
