import gql from 'graphql-tag'

/*
 * Get logs for this month with billing properties
 */

export default gql`
  query ThisMonthLogs($startOfMonth: DateTime!, $limit: Int!, $sort: String!) {
    logs(limit: $limit, where: { startTime_gt: $startOfMonth }, sort: $sort) {
      startTime
      endTime
      totalBreakDuration
      billingRate
      distance
      transportationCost
    }
  }
`
