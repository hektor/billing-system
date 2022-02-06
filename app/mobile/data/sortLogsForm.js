import { RiFilter3Line } from 'react-icons/ri'

/*
 * Form data for setting log filters
 */

export default {
  title: 'Sort logs',
  fields: [
    {
      label: 'Sort by',
      name: 'sort',
      type: 'dropdown',
      options: [
        { label: 'Date - Newest first', value: 'startTime:desc' },
        { label: 'Date - Oldest first', value: 'startTime:asc' },
        { label: 'Billing rate - High to low', value: 'billingRate:desc' },
        { label: 'Billing rate - Low to high', value: 'billingRate:asc' },
      ],
      icon: <RiFilter3Line />,
    },
  ],
}
