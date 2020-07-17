import gql from 'graphql-tag'

const GET_LOGS = gql`
{ 
  logs {
    id
    employee_id {
      email
      name
    }
    client_id {
      id
    }
    startTime
    endTime
    activitiesPerformed
    totalBreakDuration
    resourcesUsed
    billingRate
    distance
    transportationCost
  }
}
`

export default GET_LOGS
