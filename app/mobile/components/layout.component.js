import {useEffect} from 'react'
import {globalStyles} from '../styles'

export default ({ children, bottomNav }) => {

	const setViewportHeight = () => document.documentElement.style.setProperty('--viewport-height', `${window.innerHeight}px`)

	useEffect(() => {
		setViewportHeight() 
		window.addEventListener('resize', setViewportHeight)
	}, [])

	return (
		<div className="container">
			<main className="content">
				{children}
			</main>
			<style jsx global>{globalStyles}</style>
			<style jsx>{`
				.container {
					display: flex;
					flex-direction: column;
					background: #eee;
          min-height: var(--viewport-height);
				}

				.content {
					flex: 1;
					display: flex;
					flex-direction: column;
          padding: 1.6rem 0.8rem;
					background: #fff;
          max-width: 48rem;
          overflow-x: hidden;
          margin: 4.8rem 0 ${bottomNav ? '6.4' : '0'}rem 0;
				}

				@media (min-width: 768px) {
          .container {
            align-items: center;
          }

					.content {
            min-width: 48rem;
            padding: 1.6rem;
            margin: 6.4rem 0 ${bottomNav ? '8' : '0'}rem 0;
					  border-radius: var(--border-radius);
					}
			`}</style>
		</div>
	)
}
