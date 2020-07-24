import {useEffect} from 'react'
import {BottomNav} from '../components'
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
				{bottomNav && <BottomNav/>}
			</main>
			<style jsx global>{globalStyles}</style>
			<style jsx>{`
				.container {
					display: flex;
					flex-direction: column;
					background: #eee;
          height: var(--viewport-height);
				}

				.content {
					flex: 1;
					display: flex;
					flex-direction: column;
          padding: 0.8rem;
					background: #fff;
					border-radius: var(--border-radius);
          max-width: 48rem;
          overflow-x: hidden;
				}

				@media (min-width: 768px) {
          .container {
            align-items: center;
          }

					.content {
            min-width: 48rem;
            padding: 1.6rem;
					}
			`}</style>
		</div>
	)
}
