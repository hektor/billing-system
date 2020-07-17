import gql from 'graphql-tag'

export default gql`
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
