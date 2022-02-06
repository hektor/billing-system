import { useContext, useEffect } from 'react'
import Router from 'next/router'
import { Spinner } from '../components'
import { AuthCtx } from './_app'
import { SIGNIN, DASHBOARD } from '../routes'

/*
 * Splash page when opening app
 */

export default () => {
  const { user } = useContext(AuthCtx)

  useEffect(() => {
    if (user) Router.replace(DASHBOARD)
    if (!user) Router.replace(SIGNIN)
  })

  return <Spinner />
}
