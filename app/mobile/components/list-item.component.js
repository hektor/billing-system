import Link from 'next/link'

export default ({ href, id, children }) => (
	<Link key={id} href={href}>
		<a className="item">
			{children}
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
        }
      `}
			</style>
		</a>
	</Link>
)
