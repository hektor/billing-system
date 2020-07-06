import { GoMail, GoLock, GoPerson } from 'react-icons/go'

export const inputTypes = {
	EMAIL: 'email',
	PASSWORD: 'password',
	DROPDOWN: 'dropdown'
}

const { EMAIL, DROPDOWN, PASSWORD } = inputTypes

export default {
	title: 'Get started',
	fields: [
		{
			label: 'Email',
			name: 'email',
			autoComplete: 'email',
			type: EMAIL,
			placeholder: 'Choose an email',
			icon: <GoMail/>,
			required: true
		},
		{
			label: 'Contract type',
			name: 'contract-type',
			info: 'What is a contract type?',
			type: DROPDOWN,
			placeholder: 'Select your contract type',
			options: [
				'Employee',
				'Subcontractor'
			],
			icon: <GoPerson/>,
			required: true
		},
		{
			label: 'Password',
			name: 'password',
			autoComplete: 'new-password',
			type: PASSWORD,
			placeholder: 'Choose a password',
			icon: <GoLock/>,
			required: true
		}
	]
}
