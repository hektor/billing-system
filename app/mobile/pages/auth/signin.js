import {signin} from '../../auth'
import {Layout, Form, Button} from '../../components'
import AuthSwitch from './auth-switch.component'
import {signinForm}  from '../../data'
import  { GoSignIn } from 'react-icons/go'

export default () => {
	const handleSubmit = e => signin(e) 
	return (
		<Layout col>
			<div className="heading-group">
				<h1>Get started</h1>
				<h2>Sign in</h2>
			</div>
			<div className="forgot-password">
				<label htmlFor="forgot-password" className="forgot-password-label">Forgot password?</label>
				<Button name="forgot-password" className="forgot-password-action" type="button" title="Recover password" />
			</div>
			<Form
				fields={signinForm.fields}
				onSubmit={handleSubmit}
			>
				<Button primary type="submit" icon={<GoSignIn/>}>Sign in</Button>
				<AuthSwitch to="up"/>
			</Form>
			<style jsx>{`
        .heading-group {
          display: flex;
          flex-direction: column;
          flex: 1;
          margin: 3.2rem 0 0 1.6rem;
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
