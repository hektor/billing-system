import React from 'react'
import { signout } from '../auth'
import cookie from 'js-cookie'

export default () => (
  <header>
    {cookie.get('token') && <button onClick={signout}>Sign out</button>}
			<style jsx>{`
				header {
					display: flex;
					align-items: center;
					justify-content: space-between;
					background: #fff;
					border-bottom: 1px solid #eee;
				}
			`}</style>
		</header>
	)
