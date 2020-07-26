import {RiAtLine, RiLockPasswordLine} from 'react-icons/ri'

/*
 * Form data for account settings page
 */

export const inputTypes = {
	EMAIL: 'email',
	PASSWORD: 'password'
}

const {EMAIL, PASSWORD} = inputTypes

export default {
	title: 'Settings',
	fields: [
		{
			label: 'Change email',
			name: 'newEmail',
			autoComplete: 'email',
			type: EMAIL,
			placeholder: 'Enter your email',
			icon: <RiAtLine/>
		},
		{
			label: 'Change password',
			name: 'newPassword',
			autoComplete: 'new-password',
			type: PASSWORD,
			placeholder: 'Enter new password',
			icon: <RiLockPasswordLine/>
		}
	]
}
