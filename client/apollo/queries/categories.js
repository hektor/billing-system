import gql from 'graphql-tag'

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      Name
    }
  }
`

export default CATEGORIES_QUERY
