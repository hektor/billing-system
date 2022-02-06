export default ({ title, icon, children }) => (
  <div className='card'>
    <div className='card-header'>
      {icon}
      <span>{title}</span>
    </div>
    <div className='card-body'>{children}</div>
    <style jsx>
      {`
        .card {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: var(--color-primary-100);
          color: var(--color-primary-700);
          margin: 0.4rem;
          border-radius: var(--border-radius);
        }

        .card-header {
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          padding: 1.6rem;
        }

        .card-header > span {
          margin-left: 0.4rem;
        }

        .card-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 0 1.6rem 1.6rem 1.6rem;
          color: var(--color-primary-600);
        }
      `}
    </style>
  </div>
)
