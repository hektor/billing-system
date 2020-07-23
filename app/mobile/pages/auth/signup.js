import {signup} from '../../auth'
import {Layout, Form, Button} from '../../components'
import AuthSwitch from './auth-switch.component'
import {signupForm as form} from '../../data'
import {RiUserAddLine} from 'react-icons/ri'

export default () => {
	const handleSubmit = e => signup(e) 
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
				<Button primary type="submit" icon={<RiUserAddLine/>}>Create account</Button>
				<AuthSwitch to="in"/>
			</Form>
			<style jsx>
				{`
          .heading-group {
            display: flex;
            flex-direction: column;
            flex: 1;
            margin: 3.2rem 0 0 1.6rem;
          }
        `}
			</style>
		</Layout>
	)
}
