import {useState} from 'react'
import Link from 'next/link'
import {RiLoginCircleLine} from 'react-icons/ri'
import {signin} from '../../auth'
import {Layout, Form, Button} from '../../components'
import AuthSwitch from './auth-switch.component'
import Heading from './heading.component'
import {signinForm as form} from '../../data'
import {RECOVER_PASSWORD} from '../../routes'

/*
 * Sign in page for existing users
 */

export default () => {
  const [errors, setErrors] = useState()
  const handleSubmit = async e => setErrors(await signin(e))
  return (
    <Layout>
      <Heading title='Get started' subtitle='Sign in' />
      {errors &&
        errors.map((error, i) => (
          <span className='error' key={i}>
            {error}
          </span>
        ))}
      {errors && (
        <div className='recover-password'>
          <label htmlFor='recover-password'>Forgot password?</label>
          <Link href={RECOVER_PASSWORD}>
            <Button name='recover-password' title='Recover password' />
          </Link>
        </div>
      )}
      <Form fields={form.fields} onSubmit={handleSubmit} generalErrors={errors}>
        <Button primary type='submit' icon={<RiLoginCircleLine />}>
          Sign in
        </Button>
        <AuthSwitch to='up' />
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

          .recover-password {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            padding-left: 1.6rem;
          }
        `}
      </style>
    </Layout>
  )
}
