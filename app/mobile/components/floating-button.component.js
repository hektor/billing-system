import Link from 'next/link'

export default ({href, title, icon}) => (
	<Link href={href}>
		<a>
			<div>
				{icon} 
			</div>
			<span>{title}</span>
			<style jsx>
				{`
          a {
            position: fixed;
            bottom: 8rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 22rem;
            height: 6.4rem;
            width: 5.6rem;
          }

          span {
            margin-top: auto;
            color: var(--color-primary-400);
          }

          div {
            width: 4.8rem;
            height: 4.8rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-primary-400);
            background: var(--color-primary-100);
            border-radius: 2.4rem;
          }
       `}
			</style>
		</a>
	</Link>
)
