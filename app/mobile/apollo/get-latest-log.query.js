import gql from 'graphql-tag'

export default gql`
{
  logs(limit: 1, sort: "id:desc") {
    startTime
    endTime
    totalBreakDuration
  }
} 
`
