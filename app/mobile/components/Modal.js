export default ({toggle, children}) =>
	<div className={`modal ${toggle ? 'open' : 'closed'}`}>
		<style>
			{`
        .modal {
          position: absolute;
          z-index: 100;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          margin-top: 3.2rem;
          padding: 4.8rem;
          background: #fff;
          transition: .3s;
        }

        .closed {
          transform: translateX(100vw);
        }
      `}
		</style>
		{children}
	</div>

