import { GoMail } from 'react-icons/go'

export const inputTypes = {
	EMAIL: 'email',
}

const EMAIL = inputTypes

export default {
	title: 'Get password recovery link',
	fields: [
		{
			label: 'Email',
			name: 'email',
			autoComplete: 'email',
			type: EMAIL,
			placeholder: 'Enter your email',
			icon: <GoMail/>,
			required: true
		}
	]
}
