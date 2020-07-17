import gql from 'graphql-tag'

export default gql`
{ 
  logs {
    id
    employee_id {
      email
      name
    }
    client_id {
      id
      name
    }
    startTime
  }
}
`
