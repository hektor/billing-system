import { globalStyles } from '../styles'
export default ({ children }) => (
	<div className="container">
		<div className="page-container">
			<main className="content">
				{children}
			</main>
		</div>
		<style jsx global>{globalStyles}</style>
		<style jsx>{`
				.container {
					background: #eee;
          min-height: 100vh;
          min-height: -webkit-fill-available;
				}

				.container,
				.page-container {
					display: flex;
					flex-direction: column;
          flex: 1;
				}

				.content {
					flex: 1;
					order: -1;
					display: flex;
					flex-direction: column;
					background: #fff;
					border-radius: var(--border-radius);
					padding: 1.6rem;
          max-width: 32rem;
				}

				@media (min-width: 768px) {
          .container {
            justify-content: center;
            align-items: center;
          }

					.page-container {
						flex-direction: row;
					}

					.content {
						order: 1;
					  margin: 0 1.2rem;
            min-width: 32rem;
					}
			`}</style>
	</div>
)
