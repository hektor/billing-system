export default ({ title, children }) => (
	<header>
		{title && <h1>{title}</h1>}
		{children}
		<style jsx>{`
				header {
          flex: 1;
					display: flex;
					justify-content: space-between;
          align-items: center;
          max-height: 4.8rem;
				}

        h1 {
          margin: auto;
          margin-left: 1.6rem;
        }
			`}</style>
	</header>
)
