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
          padding: 2.4rem 1.6rem;
          margin: 0.8rem 0;
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
