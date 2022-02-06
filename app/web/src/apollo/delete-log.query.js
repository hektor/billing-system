import gql from "graphql-tag";

export default gql`
  mutation {
    deleteLog(input: { where: { id: 1 } }) {
      log {
        id
      }
    }
  }
`;
