import {signin} from '../../auth'
import {Layout, Button} from '../../components'
import Form from '../../components/form.component'
import AuthSwitch from './auth-switch.component'
import form  from './signinFormData'

export default () => {
	const handleSubmit = e => console.log(e)
	return (
		<Layout col>
			<div className="heading-group">
				<h1>Get started</h1>
				<h2>Sign in</h2>
			</div>
			<div className="forgot-password">
				<label htmlFor="forgot-password" className="forgot-password-label">Forgot password?</label>
				<input name="forgot-password" className="forgot-password-action" type="button" value="Reset password" />
			</div>
			<Form
				fields={form.fields}
				onSubmit={handleSubmit}
			>
				<Button type="submit">Sign in</Button>
				<AuthSwitch to="up"/>
			</Form>
			<style jsx>{`
        .heading-group {
          display: flex;
          flex-direction: column;
          flex: 1;
          margin: 3.2rem 0 0 1.6rem;
        }

        form :global(button) {
          margin-top: 3.2rem;
          border: 1px solid red;
        }

        .forgot-password {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding-left: 1.6rem;
        }
      `}</style>
		</Layout>
	)
}
