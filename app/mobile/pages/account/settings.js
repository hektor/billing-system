import Router from 'next/router'
import { Layout, Header, Form, Button} from '../../components'
import {GoChevronLeft, GoCheck, GoX} from 'react-icons/go'
import {settingsForm} from '../../data'

export default () => {
	const handleSubmit = e => console.log(e)
	return (
		<Layout>
			<Header title="Account settings">
				<a onClick={() => Router.back()}>
					<GoChevronLeft />
					<span>Back</span>
				</a>
			</Header>
			<Form
				fields={settingsForm.fields}
				onSubmit={handleSubmit}
			>
				<div className="form-actions">
					<Button primary type="submit" icon={<GoCheck/>}>Save changes</Button>
					<a type="submit"><GoX/><span>Discard changes</span></a>
				</div>
			</Form>
		</Layout>
	)
}
