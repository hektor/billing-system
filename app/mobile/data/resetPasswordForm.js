import { RiLockPasswordLine } from 'react-icons/ri'

/*
 * Form data for resetting password
 */

export default {
  title: 'Reset password',
  fields: [
    {
      label: 'New password',
      name: 'password',
      type: 'password',
      placeholder: 'Enter your new password',
      icon: <RiLockPasswordLine />,
      required: true,
    },
  ],
}
