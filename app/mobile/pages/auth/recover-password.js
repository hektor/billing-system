import {useState} from 'react'
import {sendRecoveryLink} from '../../auth'
import {Layout, Header, Form, Button} from '../../components'
import {recoverPasswordForm as form} from '../../data'
import {RiMailSendLine} from 'react-icons/ri'

export default () => {
	const [feedback, setFeedback] = useState({})
	const handleSubmit = e => sendRecoveryLink(e).then(data => setFeedback(data))
	return (
		<Layout col>
			<Header title="Recover password" />
			<h2>Request a recovery link</h2>
			{feedback.message && <h3>{feedback.message}</h3>}
			<Form
				fields={form.fields}
				onSubmit={handleSubmit}
			>
				<Button primary type="submit" icon={<RiMailSendLine/>}>Send link</Button>
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
