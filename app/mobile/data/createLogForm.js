import {
  RiContactsBook2Line,
  RiTimeLine,
  RiPinDistanceLine,
  RiMoneyEuroCircleLine,
} from 'react-icons/ri'

/*
 * Form data for creating a new log
 */

export default {
  title: 'Create new log',
  fields: [
    {
      label: 'Client',
      name: 'client',
      type: 'client',
      placeholder: 'Select client',
      icon: <RiContactsBook2Line />,
      required: true,
    },
    {
      label: 'Start time',
      name: 'startTime',
      type: 'time',
      icon: <RiTimeLine />,
      required: true,
    },
    {
      label: 'End time',
      name: 'endTime',
      type: 'time',
      icon: <RiTimeLine />,
      required: true,
    },
    {
      label: 'Total break duration',
      name: 'totalBreakDuration',
      type: 'number',
      placeholder: 'Number of minutes',
      icon: <RiTimeLine />,
      required: true,
    },
    {
      label: 'Distance traveled',
      name: 'distance',
      type: 'number',
      placeholder: 'Number of kilometers',
      icon: <RiPinDistanceLine />,
      required: true,
    },
    {
      label: 'Billing rate',
      name: 'billingRate',
      type: 'number',
      icon: <RiMoneyEuroCircleLine />,
      placeholder: 'Price per hour',
    },
    {
      label: 'Transportation cost',
      name: 'transportationCost',
      type: 'number',
      icon: <RiMoneyEuroCircleLine />,
      placeholder: 'Price per kilometer',
      required: true,
    },
    {
      label: 'Activities performed',
      name: 'activitiesPerformed',
      type: 'textarea',
      placeholder: 'List the activities you performed',
      required: true,
    },
    {
      label: 'Resources used',
      name: 'resourcesUsed',
      type: 'textarea',
      placeholder: 'List the resources you used',
    },
  ],
}
