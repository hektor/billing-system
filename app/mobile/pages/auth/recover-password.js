import {Layout, Header, Form, Button, GoBack} from '../../components'
import {recoverPasswordForm as form} from '../../data'
import {GoRocket} from 'react-icons/go'

export default () => {
	const handleSubmit = e => console.log(e)
	return (
		<Layout col>
			<Header title="Recover password">
				<GoBack/>
			</Header>
			<h2>Request a recovery link</h2>
			<Form
				fields={form.fields}
				onSubmit={handleSubmit}
			>
				<Button primary type="submit" icon={<GoRocket/>}>Send link</Button>
			</Form>
			<style jsx>{`
        h2 {
          padding: 1.6rem;
          margin-bottom: auto;
        }
      `}</style>
		</Layout>
	)
}
