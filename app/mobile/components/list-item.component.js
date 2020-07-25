import Link from 'next/link'
import {useLoading} from '../hooks'
import {Spinner} from '../components'

/*
 * List item component with loading state
 */

export default ({href, id, children}) => { 
	const {load, isLoading} = useLoading()
	return (
		<Link key={id} href={href}>
			<a className="item" onClick={load}>
				{isLoading ? <Spinner/> : children}
				<style jsx>
					{`
            .item {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 2.4rem 1.6rem;
              margin: 0.8rem 0;
              min-height: 6.4rem;
              background: var(--color-primary-100);
              border-radius: var(--border-radius);
              transition: .16s;
            }

            .item:hover {
              background: var(--color-primary-300);
            }
          `}
				</style>
			</a>
		</Link>
	)
}
