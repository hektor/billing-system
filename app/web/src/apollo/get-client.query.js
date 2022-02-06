import gql from "graphql-tag";

export default gql`
  query Clients($id: ID!) {
    client(id: $id) {
      id
      name
      email
      phone
      address
      logs {
        id
        startTime
      }
    }
  }
`;
