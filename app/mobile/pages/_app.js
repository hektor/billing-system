import { createContext, useState, useEffect } from 'react'
import Head from 'next/head'
import Cookie from 'js-cookie'
import { ApolloProvider } from '@apollo/react-hooks'
import withApollo from '../apollo/apollo'
import { IconContext as IconCtx } from 'react-icons'
import api from '../config/api'

/*
 * Create authentication context
 */

export const AuthCtx = createContext({ isAuthenticated: false })

const App = ({ Component, props, apollo }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    /*
     * If auth cookie and valid token add user to context
     */

    const token = Cookie.get('token')
    if (token)
      fetch(api.GET_USER, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async res => {
        if (!res.ok) {
          Cookie.remove('token')
          setUser(null)
          return
        }
        const user = await res.json()
        user.lastSeen = new Date().toISOString()
        setUser(user)
      })
  }, [])

  return (
    <ApolloProvider client={apollo}>
      <AuthCtx.Provider value={{ user, isAuthenticated: !!user, setUser }}>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta
            name='viewport'
            content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
          />
          <meta name='description' content='Description' />
          <meta name='keywords' content='Keywords' />
          <title>Title</title>
          <meta name='theme-color' content='#ffffff' />
          <link rel='manifest' href='/manifest.json' />
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.css'
          />
          <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
        </Head>
        <IconCtx.Provider value={{ size: 24, className: 'icon' }}>
          <Component {...props} />
        </IconCtx.Provider>
      </AuthCtx.Provider>
    </ApolloProvider>
  )
}

export default withApollo(App)
