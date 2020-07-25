import {RiContactsBook2Line} from 'react-icons/ri'

/*
 * Form data for setting log filters 
 */

export default {
	title: 'Filter logs',
	fields: [
		{
			label: 'By client',
			name: 'byClient',
			type: 'client',
			placeholder: 'Select client',
			icon: <RiContactsBook2Line/>,
		}
	]
}
