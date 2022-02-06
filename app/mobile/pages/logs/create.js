import { useContext, useEffect } from 'react'
import { useMutation } from '@apollo/react-hooks'
import Router from 'next/router'
import { RiCloseLine } from 'react-icons/ri'
import { CREATE_LOG } from '../../apollo'
import { AuthCtx } from '../_app'
import { Layout, Header, Form, BottomNav, Button } from '../../components'
import { createLogForm as form } from '../../data'
import { mergeDateTime } from '../../utils/date'
import { LOGS } from '../../routes'

/*
 * Create a new log page
 */

export default () => {
  const { user } = useContext(AuthCtx)
  const [CreateLog, { data }] = useMutation(CREATE_LOG)

  /*
   * On succesful response, redirect using received id
   */

  useEffect(() => {
    if (data) Router.replace(`${LOGS}/${data.createLog.log.id}`)
  }, [data])

  const handleSubmit = async e => {
    e.employeeId = user.id
    e.startTime = mergeDateTime(new Date(), e.startTime)
    e.endTime = mergeDateTime(new Date(), e.endTime)
    e.totalBreakDuration = Number(e.totalBreakDuration)
    e.distance = Number(e.distance)
    e.billingRate = Number(e.billingRate)
    e.transportationCost = Number(e.transportationCost)
    CreateLog({ variables: e })
  }
  return (
    <Layout bottomNav>
      <Header title='Create new log' />
      <Form fields={form.fields} onSubmit={handleSubmit}>
        <Button title='Create log' primary type='submit' />
      </Form>
      <BottomNav>
        <Button
          onClick={() => Router.replace(LOGS)}
          title='Cancel'
          icon={<RiCloseLine />}
        />
      </BottomNav>
      <style jsx>
        {`
          :global(.nav-secondary > button) {
            margin-left: auto;
            min-width: 9.6rem;
            border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0 !important;
            border-bottom: none !important;
          }
        `}
      </style>
    </Layout>
  )
}
