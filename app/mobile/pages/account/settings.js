import {Layout, Header, Form, Button} from '../../components'
import {RiSave3Line} from 'react-icons/ri'
import {settingsForm} from '../../data'

export default () => {
	const handleSubmit = e => console.log(e)
	return (
		<Layout>
			<Header title="Account settings" />
			<Form
				fields={settingsForm.fields}
				onSubmit={handleSubmit}
			>
				<Button primary type="submit" icon={<RiSave3Line/>}>Save changes</Button>
			</Form>
		</Layout>
	)
}
