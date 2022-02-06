/*
 * Reusable modal component
 * To be toggled from parent
 */

export default ({ toggle, children, bottom }) => (
  <div
    className={`modal-container ${
      toggle ? 'container-open' : 'container-closed'
    }`}
  >
    <div className={`modal ${toggle ? 'open' : 'closed'}`}>{children}</div>
    <style>
      {`
        .modal-container {
          position: fixed;
          z-index: 100;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          background: #00000055;
          transition: visibility 1s, opacity 0.3s cubic-bezier(0.4, 0.14, 0.3, 1);
        }

        .modal {
          flex: 1;
          display: flex;
          flex-direction: column;
          margin: 6.4rem 0.8rem;
          ${bottom && 'margin-top: auto;'}
          padding: 1.6rem;
          padding-bottom: 6.4rem;
          background: #fff;
          transition: .3s cubic-bezier(0.4, 0.14, 0.3, 1);
          border-radius: var(--border-radius-lg);
          max-width: calc(48rem - 1.6rem);
        }

        @media (min-width: 768px) {
          .modal { 
            max-width: calc(48rem - 3.2rem);
            margin: 12.8rem auto;
          }
        }

        .container-open {
          opacity: 1;
          visibility: visible;
        }

        .container-closed {
          opacity: 0;
          visibility: hidden;
        }

        .open {
          transform: translateY(0) scale(1);
        }

        .closed {
          transform: translateY(100vh) scale(0);
        }
      `}
    </style>
  </div>
)
