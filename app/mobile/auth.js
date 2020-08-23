import Router from 'next/router'
import nextCookie from 'next-cookies'
import cookie from 'js-cookie'
import {SIGNIN, DASHBOARD} from './routes'

import {api} from './config'

/*
 * Flatten messages array from response
 */

const flattenMessages = messages => {
  let flattened = []
  messages.map(({messages}) =>
    messages.map(({message}) => flattened.push(message))
  )
  return flattened
}

/*
 * Handle a succesful authentication request
 */

const handleSuccess = ({jwt, user}) => {
  cookie.set('token', jwt, {expires: 1})
  cookie.set('user', user, {expires: 1})
  Router.replace(DASHBOARD)
  return null
}

/*
 * Handle a failed authentication request
 */

const handleInvalid = ({/* statusCode, error, */ message}) =>
  flattenMessages(message)

/*
 * Wrap POST body with fetch options
 */

const postOptions = body => ({
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(body)
})

/*
 * Handle a signup request
 */

export const signup = async ({email, password}) => {
  const options = postOptions({email, password})
  const res = await fetch(api.SIGNUP, options)
  if (res.statusCode === 200) return handleSuccess(await res.json())
  if (res.statusCode !== 200) return handleInvalid(await res.json())
}

/*
 * Handle a signin request
 */

export const signin = async ({email, password}) => {
  const options = postOptions({identifier: email, password})
  const res = await fetch(api.SIGNIN, options)
  if (res.status === 200) return handleSuccess(await res.json())
  if (res.status === 400) return handleInvalid(await res.json())
  if (res.status === 429)
    return [
      'Too many failed signin attempts, try again later or reset password'
    ]
}

/*
 * Handle a password recovery request
 */

export const sendRecoveryLink = async ({email}) => {
  const res = await fetch(api.FORGOT_PASSWORD, postOptions({email}))
  if (res.status === 400)
    return {
      message: 'We could not send a recovery link at this time',
      type: 'warning'
    }
  if (res.status === 200)
    return {
      message: 'We sent a recovery link to this email address',
      type: 'success'
    }
}

/*
 * Handle a password reset request
 */

export const resetPassword = async ({password, passwordConfirmation, code}) => {
  const res = await fetch(
    api.RESET_PASSWORD,
    postOptions({password, passwordConfirmation, code})
  )
  if (res.status === 400)
    return {message: 'This recovery link is invalid', type: 'warning'}

  if (res.status === 200) return handleSuccess(await res.json())
}

export const auth = ctx => {
  const {token} = nextCookie(ctx)
  if (ctx.req && !token) {
    ctx.res.writeHead(302, {Location: '/signin'})
    ctx.res.end()
    return
  }
  !token && Router.replace(SIGNIN)
  return token
}

/*
 * Handle a signout
 * - Remove the token cookie
 * - Redirect user to signin page
 */

export const signout = () => {
  cookie.remove('token')
  Router.replace(SIGNIN)
}
