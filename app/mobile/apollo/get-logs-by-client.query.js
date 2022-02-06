import gql from 'graphql-tag'

export default gql`
  query LogsByClient($id: ID!) {
    logs(where: { client_id: { id: $id } }) {
      id
      startTime
    }
  }
`
