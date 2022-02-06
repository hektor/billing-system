import { RiAtLine, RiLockPasswordLine, RiQuillPenLine } from 'react-icons/ri'

/*
 * Form data for signup form
 */

export const inputTypes = {
  EMAIL: 'email',
  PASSWORD: 'password',
  DROPDOWN: 'dropdown',
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
      icon: <RiAtLine />,
      required: true,
    },
    {
      label: 'Contract type',
      name: 'contract-type',
      info: 'What is a contract type?',
      type: DROPDOWN,
      placeholder: 'Select your contract type',
      options: [
        { label: 'Employee', value: 'employee' },
        { label: 'Subcontractor', value: 'subcontractor' },
      ],
      icon: <RiQuillPenLine />,
      required: true,
    },
    {
      label: 'Password',
      name: 'password',
      autoComplete: 'new-password',
      type: PASSWORD,
      placeholder: 'Choose a password',
      icon: <RiLockPasswordLine />,
      required: true,
    },
  ],
}
