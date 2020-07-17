import gql from 'graphql-tag'

export default gql`
mutation {
  createLog(input: { 
    data: { 
      employee_id: 7,
      client_id: 1,
      startTime: "2018-09-15T00:17:11.790Z", 
      endTime: "2018-09-15T00:17:11.790Z",
      activitiesPerformed: "This and that",
      totalBreakDuration: 30,
      resourcesUsed: "This and that",
      billingRate: 75.00
      distance: 50,
      transportationCost: 2.44,
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
