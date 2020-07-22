import {RiAtLine} from 'react-icons/ri'

export default {
	title: 'Get password recovery link',
	fields: [
		{
			label: 'Email',
			name: 'email',
			autoComplete: 'email',
			type: 'email',
			placeholder: 'Enter your email',
			icon: <RiAtLine/>,
			required: true
		}
	]
}
