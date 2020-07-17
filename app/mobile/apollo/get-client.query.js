import gql from 'graphql-tag'

export default gql`
query Clients($id: ID!) {
  client(id: $id) {
    id
    name
    phone
    address
    logs {
      id
      startTime
    }
  }
} 
`


