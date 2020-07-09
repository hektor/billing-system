import {useState} from 'react'
import { sendRecoveryLink } from '../../auth'
import {Layout, Header, Form, Button, GoBack} from '../../components'
import {recoverPasswordForm as form} from '../../data'
import {GoRocket} from 'react-icons/go'

export default () => {
	const [feedback, setFeedback] = useState({})
	const handleSubmit = e => sendRecoveryLink(e).then(data => setFeedback(data))
	return (
		<Layout col>
			<Header title="Recover password">
				<GoBack/>
			</Header>
			<h2>Request a recovery link</h2>
			{feedback.message && <h3>{feedback.message}</h3>}
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

        h3 {
          padding: 1.6rem;
          color: ${feedback.message && feedback.type === 'warning' ? 'var(--color-warning-500)' : 'var(--color-primary-300)'};
        }
      `}</style>
		</Layout>
	)
}
