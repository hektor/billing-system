import {signup} from '../../auth'
import {Layout, Form, Button} from '../../components'
import AuthSwitch from './auth-switch.component'
import form from './signupFormData'

export default () => {
	const handleSubmit = e => console.log(e)
	return (
		<Layout col>
			<div className="heading-group">
				<h1>Get started</h1>
				<h2>Sign up</h2>
			</div>
			<Form
				fields={form.fields}
				onSubmit={handleSubmit}
			>
				<Button primary type="submit">Sign up</Button>
				<AuthSwitch to="in"/>
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
      `}</style>
		</Layout>
	)
}
