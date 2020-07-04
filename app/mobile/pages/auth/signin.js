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
			<h1>Get started</h1>
			<form>
				<label htmlFor="email">Email</label>
				<input
					onChange={e => handleInput(e)}
					type="email"
					name="email"
				/>
				<label htmlFor="password">Password</label>
				<input
					onChange={e => handleInput(e)}
					type="password"
					name="password"
				/>
				{/* <Link href="forgot-password">
					<a className="forgot-password">Forgot password?</a>
				</Link> */}
				<button
					onClick={e => handleSubmit(e)}
					type="submit"
					className='-primary-bg'
				>
          Log in
				</button>
				<AuthSwitch to="up"/>
			</form>
			<style jsx>{`
        button {
          margin-top: auto;
        }

        .forgot-password {
          text-align: right;
          padding-bottom: 1.6rem;
        }
      `}</style>
		</Layout>
	)
}
