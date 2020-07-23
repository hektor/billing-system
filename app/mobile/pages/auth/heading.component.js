export default ({title, subtitle, children}) => (
	<div>
		<h1>{title}</h1>
		<h2>{subtitle}</h2>
		{children}
		<style jsx>
			{`
        div {
          display: flex;
          flex-direction: column;
          flex: 1;
          margin: 1.6rem 0 0 1.6rem;
        }

        h2 {
          color: var(--color-primary-300)
        }
      `}
		</style>
	</div>
)
