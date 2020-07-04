import Link from 'next/link'

export default ({ to }) => (
	<span className="switch-sign-type">
		{to === 'up' ? 'Create an account?' : 'Already have an account?'}
		<Link href={to === 'up' ? 'signup' : 'signin'}>
			<a>{to === 'up' ? 'Sign up' : 'Sign in'}</a>
		</Link>
		<style jsx>{`
        a {
          text-decoration: underline;
        }

        .switch-sign-type {
          padding: 1.6rem 1.6rem 0 1.6rem;
          display: flex;
          justify-content: space-between;
        } 
    `}</style>
	</span>
)
