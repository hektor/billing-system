export default ({ title, type, onClick, loading, children, primary, icon }) => (
	<button onClick={onClick} type={type}>
		<i
			data-eva={icon}
			data-eva-animation="pulse"
			data-eva-hover="true"
			data-eva-infinite="true"
			data-eva-fill={primary ? 'var(--color-primary-100)' : 'var(--color-primary-300)'}
			style={{marginRight: '.2rem'}}
		/>
		{children}
		{title}
		{loading && 'loading'}
		<style jsx>{`
      button :global(i) {
        margin-right: 0.4rem;
      }

      button {
        display: flex;
        align-items: center;
        color: ${primary ? 'var(--color-primary-100)' : 'var(--color-primary-300)'};
        background: ${primary ? 'var(--color-primary-500)' : 'var(--color-white)'};
        border: 1px solid ${primary ? 'var(--color-primary-500)' : 'var(--color-primary-300)'};
      }
    `}</style>
	</button>
)
