import React, { useState } from 'react'
import Layout from '../components/Layout'

export default () => {
	const [user, setUser] = useState({
		email: '',
		username: '',
		password: ''
	})

	const {email, username, password} = user

	const [loading, setLoading] = useState(false)

	const handleInput = e => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const handleSubmit = e => {
		e.preventDefault()
		setLoading(true)
	}

	return (
		<Layout wrap>
			<h1>Account aanmaken</h1>
			<form>
				{loading && <div>Loading</div>}
				<label htmlFor="email">Email</label>
				<input
					onChange={e => handleInput(e)}
					type="email"
					name="email"
				/>
        <label htmlFor="password">
          Password
				</label>
				<input
					onChange={e => handleInput(e)}
					type="password"
					name="password"
				/>
        <label htmlFor="password">
          Confirm password	
				</label>
				<input
					onChange={e => handleInput(e)}
					type="password"
					name="password-confirm"
				/>
				<button
					onClick={e => handleSubmit(e)}
					type="submit"
        >
          Sign up
				</button>
			</form>
		</Layout>
	)
}
