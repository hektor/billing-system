import gql from 'graphql-tag'

export default gql`
mutation CreateLog(
  $employeeId: ID!,
  $startTime: DateTime!,
  $endTime: DateTime!,
  $activitiesPerformed: String!,
  $totalBreakDuration: Int!, 
  $resourcesUsed: String!,
  $billingRate: Float!,
  $distance: Int!,
  $transportationCost: Float!
) {
  createLog(input: { 
    data: { 
      employee_id: $employeeId,
      client_id: 1,
      startTime: $startTime,
      endTime: $endTime,
      activitiesPerformed: $activitiesPerformed,
      totalBreakDuration: $totalBreakDuration,
      resourcesUsed: $resourcesUsed,
      billingRate: $billingRate,
      distance: $distance,
      transportationCost: $transportationCost,
    }
  })
  {
    log {
      employee_id {
        email,
        name
      },
      client_id {
        id
      }
      startTime
      endTime,
      activitiesPerformed,
      totalBreakDuration,
      resourcesUsed,
      billingRate,
      distance,
      transportationCost
    }
  }
}`
