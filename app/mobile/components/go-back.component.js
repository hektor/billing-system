import Router from 'next/router'
import { GoChevronLeft } from 'react-icons/go'

export default () => (
	<a onClick={() => Router.back()}>
		<GoChevronLeft />
		<span>Back</span>
		<style>
			{`
        a {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary-300);
          padding: 1.6rem;
        }

        a :global(.icon) {
          height: 2rem;
          width: 2rem;
        }

        span {
          padding: 0.4rem;
        }
      `}
		</style>
	</a>
)
