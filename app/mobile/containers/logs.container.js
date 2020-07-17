import Link from 'next/link'
import Query from '../apollo/query'
import { GET_LOGS } from '../apollo'
import { formatDate } from '../utils/date'

export default () => (
	<div className="list">
		<Query query={GET_LOGS} id={null}>
			{({logs}) =>
				logs.map(({id, client_id, startTime}) => (
					<Link key={id} href={`logs/${id}`}>
						<a className="item">
							<span>{client_id.name}</span>
							<span>{formatDate(startTime)}</span>
						</a>
					</Link>
				))
			}
		</Query>
		<style jsx>
			{`
        .item {
          display: flex;
          justify-content: space-between;
          padding: 3.2rem 1.6rem;
          border-bottom: 1px solid var(--color-primary-300);
          transition: .16s;
        }

        .item:hover {
          background: var(--color-primary-100);
          padding: 3.2rem;
          margin: 0 -1.6rem;
        }
      `}
		</style>
	</div>
)
