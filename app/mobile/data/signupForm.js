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
			icon: 'email-outline',
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
			icon: 'person-outline',
			required: true
		},
		{
			label: 'Password',
			name: 'password',
			autoComplete: 'new-password',
			type: PASSWORD,
			placeholder: 'Choose a password',
			icon: 'lock-outline',
			required: true
		}
	]
}
