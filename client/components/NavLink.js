import Link from './Link'

export default ({title, href, icon, onClick}) => (
	<Link href={href}>
    <a onClick={onClick} href={href}>
      <div className="nav-icon">
				{icon}
			</div>
			{title}
			<style jsx>{`
				a {
					flex: 1;
					text-decoration: none;
					display: flex;
					align-items: center;
          padding: .8rem 0.8rem;
          border-bottom: 1px solid #eee;
          transition: 11ms cubic-bezier(0.2, 0.2, 0.38, 0.9);
				}

        a:hover {
          background: #eee;
        }

			  .active {
					font-weight: bold;
					border-right: 2px solid;
				}

        :global(.nav-icon > svg) {
          width: 2rem;
          margin: 0 .8rem;
        }
    `}
			</style>
		</a>
	</Link>
)
