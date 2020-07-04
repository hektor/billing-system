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
			<h1>Account aanmaken</h1>
			<form>
				<label htmlFor="email">Email</label>
				<input
					onChange={e => handleInput(e)}
					type="email"
					name="email"
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
				/>
				<button
					onClick={e => handleSubmit(e)}
					type="submit"
				>
          Sign up
				</button>
				<AuthSwitch to="in"/>
			</form>
			<style>{`
        button {
          margin-top: auto;
        }
      `}</style>
		</Layout>
	)
}
