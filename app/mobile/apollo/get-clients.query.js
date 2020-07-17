import gql from 'graphql-tag'

export default gql`
{
  clients {
    id
    name
    phone
    address
    logs {
      id
    }
  }
}`
