import { GoMail } from 'react-icons/go'

export default {
	title: 'Get password recovery link',
	fields: [
		{
			label: 'Email',
			name: 'email',
			autoComplete: 'email',
			type: 'email',
			placeholder: 'Enter your email',
			icon: <GoMail/>,
			required: true
		}
	]
}
