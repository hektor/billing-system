import gql from "graphql-tag";

export default gql`
  query Logs($filter: JSON!, $sort: String!) {
    logs(limit: 8, where: $filter, sort: $sort) {
      id
      employee_id {
        email
        name
      }
      startTime
      billingRate
      updated_at
      approved
    }
  }
`;
