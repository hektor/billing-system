import {useState} from 'react'
import {useRouter} from 'next/router'
import {RECOVER_PASSWORD} from '../../routes'
import {Layout, Header, Form, Button} from '../../components'
import {resetPasswordForm as form} from '../../data'
import {resetPassword} from '../../auth'
import {RiCheckLine} from 'react-icons/ri'

export default () => {
	const [feedback, setFeedback] = useState({ message: null, type: null})
	const router = useRouter()
	const {code} = router.query
	const handleSubmit = ({ password }) => resetPassword({ password, passwordConfirmation: password, code}).then(data => setFeedback(data))
	return (
		<Layout col>
			<Header title="Reset password"/>
			<h2>Reset your password</h2>
			{(feedback && feedback.message) && <h3>{feedback.message}</h3>}
			{feedback && feedback.type === 'warning' && (
				<div className="warning">
					<span>Do you want to receive a new recovery link?</span>
					<a onClick={() => router.replace(RECOVER_PASSWORD)}>Request new link</a>
				</div>
			)}
			<Form
				fields={form.fields}
				onSubmit={handleSubmit}
			>
				<Button primary type="submit" icon={<RiCheckLine/>}>Confirm</Button>
			</Form>
			<style jsx>{`
        h2 {
          padding: 1.6rem;
          margin-bottom: auto;
        }

        h3 {
          padding: 1.6rem;
          color: var(--color-warning-500);
          border: 1px solid var(--color-warning-500);
          margin: 1.6rem 0;
        }

        p {
          color: #000;
        }

        h2 {
          padding: 1.6rem;
          margin-bottom: auto;
        }

        .warning > span {
          padding: 1.6rem;
        }

        .warning > a {
          margin: 1.6rem 0;
          border: 1px solid var(--color-primary-300);
        }
      `}</style>
		</Layout>
	)
}
