import gql from "graphql-tag";

export default gql`
  query Logs($id: ID!) {
    log(id: $id) {
      id
      employee_id {
        email
        name
      }
      client_id {
        id
        name
        phone
        address
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
`;
