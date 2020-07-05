import { useState } from 'react'
import { signin } from '../../auth'
import Layout from '../../components/Layout'
import AuthSwitch from './auth-switch.component'

export default () => {
	const [user, setUser] = useState({
		email: '',
		password: ''
	})

	const handleInput = e => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const handleSubmit = async e => {
		e.preventDefault()
		signin(user)
	}

	return (
		<Layout col>
			<div className="heading-group">
				<h1>Get started</h1>
				<h2>Sign in</h2>
			</div>
			<form>
				<div className="forgot-password">
					<label htmlFor="forgot-password" className="forgot-password-label">Forgot password?</label>
					<input name="forgot-password" className="forgot-password-action" type="button" value="Reset password" />
				</div>
				<label htmlFor="email">Email</label>
				<input
					onChange={e => handleInput(e)}
					type="email"
					name="email"
					placeholder="Enter your email"
					autoComplete="email"
				/>
				<label htmlFor="password">Password</label>
				<input
					onChange={e => handleInput(e)}
					type="password"
					name="password"
					placeholder="Enter your password"
					autoComplete="current-password"
				/>
				<button
					onClick={e => handleSubmit(e)}
					type="submit"
				>
          Sign in
				</button>
				<AuthSwitch to="up"/>
			</form>
			<style jsx>{`
        .heading-group {
          margin: 3.2rem 0 0 1.6rem;
        }

        form {
          margin-top: auto;
        }

        label {
          margin-left: 1.6rem;
        }

        button {
          margin-top: 3.2rem;
        }

        .forgot-password {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
        }
      `}</style>
		</Layout>
	)
}
