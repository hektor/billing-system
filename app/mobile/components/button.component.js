import {Spinner} from '.'

export default ({title, type, onClick, isLoading, children, primary, icon}) => (
  <button onClick={onClick} type={type || 'button'}>
    {icon && !isLoading && <i>{icon}</i>}
    {children}
    {title}
    {isLoading && (
      <i className='loader'>
        <Spinner />
      </i>
    )}
    <style jsx>
      {`
        button :global(i) {
          margin-right: 0.8rem;
        }

        .loader {
          margin-left: 0.8rem;
          margin-right: 0;
        }

        button {
          cursor: pointer;
          display: flex;
          align-items: center;
          color: ${primary
            ? 'var(--color-primary-100)'
            : 'var(--color-primary-300)'};
          background: ${primary
            ? 'var(--color-primary-500)'
            : 'var(--color-white)'};
          border: 1px solid
            ${primary ? 'var(--color-primary-500)' : 'var(--color-primary-300)'};
          transition: 0.16s;
        }

        button:hover {
          color: ${primary
            ? 'var(--color-primary-300)'
            : 'var(--color-primary-500)'};
          background: ${primary
            ? 'var(--color-primary-700)'
            : 'var(--color-primary-200)'};
          border-color: ${primary
            ? 'var(--color-primary-700)'
            : 'var(--color-primary-500)'};
        }
      `}
    </style>
  </button>
)
