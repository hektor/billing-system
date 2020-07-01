import React from 'react'
import { useRouter } from 'next/router'
import Query from '../apollo/query'
import DOCUMENT_QUERY from '../apollo/queries/document'

import Layout from '../components/Layout'

export default () => (
	<Layout>
		<Query query={DOCUMENT_QUERY} id={useRouter().query.id}>
			{({ data: { document } }) => <h1>{document.Titel}</h1>}
		</Query>
	</Layout>
)
