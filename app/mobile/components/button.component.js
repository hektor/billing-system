export default ({ title, type, onClick, loading, children, primary }) => (
	<button onClick={onClick} type={type}>
		{children}
		{title}
		{loading && 'loading'}
		<style jsx>{`
      button {
        color: ${primary ? 'var(--color-primary-100)' : 'var(--color-primary-300)'};
        background: ${primary ? 'var(--color-primary-500)' : 'var(--color-white)'};
        border: 1px solid ${primary ? 'var(--color-primary-500)' : 'var(--color-primary-300)'};
      }
    `}</style>
	</button>
)
