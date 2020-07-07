import { Layout, Header, Form, Button, GoBack} from '../../components'
import {GoCheck, GoX} from 'react-icons/go'
import {settingsForm} from '../../data'

export default () => {
	const handleSubmit = e => console.log(e)
	return (
		<Layout>
			<Header title="Account settings">
				<GoBack/>
			</Header>
			<Form
				fields={settingsForm.fields}
				onSubmit={handleSubmit}
			>
				<Button primary type="submit" icon={<GoCheck/>}>Save changes</Button>
			</Form>
		</Layout>
	)
}
