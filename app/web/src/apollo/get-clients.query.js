import gql from "graphql-tag";

export default gql`
  {
    clients {
      id
      name
      email
      phone
      address
      logs {
        id
      }
    }
  }
`;
