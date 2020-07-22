import {RiLockPasswordLine} from 'react-icons/ri'

export default {
	title: 'Reset password',
	fields: [
		{
			label: 'New password',
			name: 'password',
			type: 'password',
			placeholder: 'Enter your new password',
			icon: <RiLockPasswordLine/>,
			required: true
		}
	]
}
