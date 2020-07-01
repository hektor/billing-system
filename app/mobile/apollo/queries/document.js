import gql from 'graphql-tag'

const DOCUMENT_QUERY = gql`
  query Documents($id: ID!) {
    document(id: $id) {
      id
      Title
      Description
      updated_at
    }
  }
`

export default DOCUMENT_QUERY
