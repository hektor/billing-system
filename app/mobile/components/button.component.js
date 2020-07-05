export default ({ title, type, onClick, loading, children }) => (
	<button onClick={onClick} type={type}>
		{children}
		{title}
		{loading && 'loading'}
	</button>
)
