import React, { useState } from 'react'
import Link from 'next/link'
import { signin } from '../auth'
import Layout from '../components/Layout'

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
			<h1>Sign in</h1>
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
				<button
					onClick={e => handleSubmit(e)}
					type="submit"
					className='-primary-bg'
				>
          Log in
				</button>
				<Link href="signup">
					<a>Sign up</a>
				</Link>
			</form>
		</Layout>
	)
}
