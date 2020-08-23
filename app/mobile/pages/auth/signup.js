import {useState} from 'react'
import {signup} from '../../auth'
import {Layout, Form, Button} from '../../components'
import AuthSwitch from './auth-switch.component'
import Heading from './heading.component'
import {signupForm as form} from '../../data'
import {RiUserAddLine} from 'react-icons/ri'

/*
 * Create a new account page
 */

export default () => {
  const [errors, setErrors] = useState()
  const handleSubmit = async e => setErrors(await signup(e))
  return (
    <Layout col>
      <Heading title='Get started' subtitle='Sign up' />
      {errors &&
        errors.map((error, i) => (
          <span className='error' key={i}>
            {error}
          </span>
        ))}
      <Form fields={form.fields} onSubmit={handleSubmit} generalErrors={errors}>
        <Button primary type='submit' icon={<RiUserAddLine />}>
          Create account
        </Button>
        <AuthSwitch to='in' />
      </Form>
      <style jsx>
        {`
          .error {
            padding: 1.6rem;
            margin: 1.6rem 0;
            font-weight: bold;
            color: var(--color-warning-500);
            border: 1px solid var(--color-warning-500);
            border-radius: var(--border-radius);
          }

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
