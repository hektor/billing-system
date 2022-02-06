import gql from 'graphql-tag'

/*
 * Get logs for this week with billing properties
 */

export default gql`
  query ThisWeekLogs($startOfWeek: DateTime!, $limit: Int!, $sort: String!) {
    logs(limit: $limit, where: { startTime_gt: $startOfWeek }, sort: $sort) {
      startTime
      endTime
      totalBreakDuration
      billingRate
      distance
      transportationCost
    }
  }
`
