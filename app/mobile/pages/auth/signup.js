import {useState} from 'react'
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

	const handleSubmit = e => {
		e.preventDefault()
	}

	return (
		<Layout col>
			<div className="heading-group">
				<h1>Get started</h1>
				<h2>Sign up</h2>
			</div>
			<form>
				<label htmlFor="email">Email</label>
				<input
					onChange={e => handleInput(e)}
					type="email"
					name="email"
					placeholder="Choose an email"
					autoComplete="email"
				/>
				<label htmlFor="contract-type">Contract type</label>
				<select>
					<option>Employee</option>
					<option>Subcontractor</option>
				</select>
				<label htmlFor="password">
          Password
				</label>
				<input
					onChange={e => handleInput(e)}
					type="password"
					name="password"
					placeholder="Choose a password"
					autoComplete="new-password"
				/>
				<button
					onClick={e => handleSubmit(e)}
					type="submit"
				>
          Sign up
				</button>
				<AuthSwitch to="in"/>
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
