export default ({ title, type, onClick, loading, children, primary, icon }) => (
	<button onClick={onClick} type={type}>
		{icon && <i>{icon}</i>}
		{children}
		{title}
		{loading && 'loading'}
		<style jsx>{`
      button :global(i) {
        margin-right: 0.8rem;
      }

      button {
        cursor: pointer;
        display: flex;
        align-items: center;
        color: ${primary ? 'var(--color-primary-100)' : 'var(--color-primary-300)'};
        background: ${primary ? 'var(--color-primary-500)' : 'var(--color-white)'};
        border: 1px solid ${primary ? 'var(--color-primary-500)' : 'var(--color-primary-300)'};
      }
    `}</style>
	</button>
)
