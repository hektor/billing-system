export default ({ title, children }) => (
	<header>
		{title && <h1>{title}</h1>}
		{children}
		<style jsx>{`
				header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          flex: 1;
					display: flex;
					justify-content: space-between;
          align-items: center;
          max-height: 4.8rem;
          padding: 1.6rem 0 0.8rem 1.6rem;
          background: var(--color-white);
          border-bottom: 1px solid var(--color-primary-100);
				}
			`}</style>
	</header>
)
