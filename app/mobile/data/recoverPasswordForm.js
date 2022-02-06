import { RiAtLine } from 'react-icons/ri'

/*
 * Form data for requesting a password recovery link
 */

export default {
  title: 'Get password recovery link',
  fields: [
    {
      label: 'Email',
      name: 'email',
      autoComplete: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      icon: <RiAtLine />,
      required: true,
    },
  ],
}
