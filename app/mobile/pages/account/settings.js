import { Layout, Header, Form, Button } from '../../components'
import { RiSave3Line } from 'react-icons/ri'
import { settingsForm } from '../../data'

/*
 * Account settings page
 */

export default () => {
  const handleSubmit = e => console.log(e)
  return (
    <Layout>
      <Header title='Account settings' />
      <Form fields={settingsForm.fields} onSubmit={handleSubmit}>
        <Button primary type='submit' icon={<RiSave3Line />}>
          Save changes
        </Button>
      </Form>
      <style jsx>
        {`
          :global(header) {
            margin-bottom: auto;
          }
        `}
      </style>
    </Layout>
  )
}
