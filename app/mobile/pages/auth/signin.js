import { useState } from 'react'
import {signin} from '../../auth'
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
		<Layout wrap col>
			<div className="heading-group">
				<h1>Get started</h1>
				<h2>Sign in</h2>
			</div>
			<form>
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
				{/* <Link href="forgot-password">
					<a className="forgot-password">Forgot password?</a>
				</Link> */}
				<button
					onClick={e => handleSubmit(e)}
					type="submit"
				>
          Log in
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
          margin-top: 4.8rem;
        }

        .forgot-password {
          text-align: right;
          padding-bottom: 0.8rem;
        }
      `}</style>
		</Layout>
	)
}
