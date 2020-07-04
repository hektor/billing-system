import globalStyles from '../styles/global'
import Header from './Header'
import Nav from './Nav'

export default ({children, wrap}) => {
	return (
		<div className="container">
			<Header />
			<div className="page-container">
				<Nav />
				<main className="content">
					{children}
				</main>
			</div>
			<style>{globalStyles}</style>
			<style jsx>{`
				.container {
					min-height: 100vh;
					background: #eee;
				}

				.container,
				.page-container {
					display: flex;
					flex-direction: column;
          flex-grow: 1;
          position: relative;
          height: 100%;
          overflow: hidden;
				}

				.content {
					flex: 1 1 auto;
					order: -1;
					display: flex;
					flex-direction: column;
					background: #fff;
					border-radius: var(--border-radius);
					padding: 1.6rem;
				}

				@media (min-width: 768px) {
					.page-container {
						flex-direction: row;
					}

					.content {
						order: 1;
					  margin: 1.2rem;
					}
			`}</style>
		</div>
	)
}
