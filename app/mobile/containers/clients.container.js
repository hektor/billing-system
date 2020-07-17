import Link from 'next/link'
import Query from '../apollo/query'
import { GET_CLIENTS } from '../apollo'

export default () => (
	<div className="list">
		<Query query={GET_CLIENTS} id={null}>
			{({clients}) =>
				clients.map(({id, name, phone}) => (
					<Link key={id} href={`/clients/${id}`}>
						<div className="item">
							<span>{name}</span>
							<span>{phone}</span>
						</div>
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
        }
      `}
		</style>
	</div>
)
