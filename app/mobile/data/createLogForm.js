/*
 
employee_id: 7,
client_id: 1,
  startTime: "2017-07-15T00:17:11.790Z", 
  endTime: "2017-07-15T00:17:11.790Z",
  activitiesPerformed: "More of that",
  totalBreakDuration: 30,
  resourcesUsed: "More of that",
  billingRate: 75.00
  distance: 30,
  transportationCost: 2.44,
*/

export default {
	title:  'Create new log',
	fields: [
		{
			label: 'Client'
		},
		{
			label: 'Start time',
			name: 'start-time',
			type: 'time',
		},
		{
			label: 'End time',
			name: 'end-time',
			type: 'time',
		},
		{
			label: 'Total break duration',
			name: 'total-break-duration',
			type: 'number',
			placeholder: 'Number of minutes'
		},
		{
			label: 'Distance traveled',
			name: 'distance',
			type: 'number',
			placeholder: 'Number of kilometers'
		},
		{
			label: 'Billing rate',
			name: 'billing-rate',
			type: 'number',
			placeholder: 'Price per hour'
		},
		{
			label: 'Transportation cost',
			name: 'transportation-cost',
			type: 'number',
			placeholder: 'Price per kilometer'
		},
		{
			label: 'Activities performed',
			name: 'activities-performed',
			type: 'textarea',
			placeholder: 'List the activities you performed',
		},
		{
			label: 'Resources used',
			name: 'resources-used',
			type: 'textarea',
			placeholder: 'List the resources you used',
		}
	]
}
