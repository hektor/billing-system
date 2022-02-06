import { useState } from 'react'
import Router, { useRouter } from 'next/router'
import { RECOVER_PASSWORD } from '../../routes'
import { Layout, Form, Button } from '../../components'
import { resetPasswordForm as form } from '../../data'
import { resetPassword } from '../../auth'
import { RiCheckLine } from 'react-icons/ri'
import Heading from './heading.component'

/*
 * Reset password (from recovery link) page
 */

export default () => {
  const [feedback, setFeedback] = useState({ message: null, type: null })
  const { code } = useRouter().query
  const handleSubmit = ({ password }) =>
    resetPassword({ password, passwordConfirmation: password, code }).then(
      data => setFeedback(data),
    )
  return (
    <Layout col>
      <Heading title='Reset password' subtitle='Reset your password' />
      {feedback && feedback.message && <h3>{feedback.message}</h3>}
      {feedback && feedback.type === 'warning' && (
        <div className='warning'>
          <span>Do you want to receive a new recovery link?</span>
          <a onClick={() => Router.replace(RECOVER_PASSWORD)}>
            Request new link
          </a>
        </div>
      )}
      <Form fields={form.fields} onSubmit={handleSubmit}>
        <Button primary type='submit' icon={<RiCheckLine />}>
          Confirm
        </Button>
      </Form>
      <style jsx>{`
        h3 {
          padding: 1.6rem;
          color: var(--color-warning-500);
          border: 1px solid var(--color-warning-500);
          margin: 1.6rem 0;
        }

        p {
          color: #000;
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
