export default () => (
	<div className="skeleton">
		<style jsx>
			{`
        :global(.skeleton) {
          width: 100%;
          height: 6.4rem;
          margin: 0.8rem 0;
          position: relative;
          background: var(--color-primary-100);
          border-radius: var(--border-radius)
        }

        :global(.skeleton::before) {
          content: '';
          position: absolute;
          height: 6.4rem;
          width: 100%;
          background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0),
            var(--color-white),
            rgba(255, 255, 255, 0)
          );
          animation: progress 1.2s infinite;
        }

        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}
		</style>
	</div>
)
