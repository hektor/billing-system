import {useContext} from 'react'
import {useRouter} from 'next/router'
import {RiUserSettingsLine, RiLogoutCircleLine, RiUserLine} from 'react-icons/ri'
import {signout} from '../../auth'
import {Layout, Header, Button} from '../../components'
import {AuthCtx} from '../_app'

/*
 * General account overview page
 */

export default () => {
	const {user} = useContext(AuthCtx)
	const router = useRouter()
	return (
		<Layout>
			<Header title="My account">
			</Header>
			<div className="account-details">
				<div className="avatar">
					<RiUserLine size="100%"/>
				</div>
				<h2>{user && user.name || user && user.email}</h2>
			</div>
			<div className="account-actions">
				<Button icon={<RiLogoutCircleLine />} onClick={signout} color='var(--color-danger-900)'>Sign out</Button>
				<Button icon={<RiUserSettingsLine />} onClick={() => router.replace('/account/settings')}>Account settings</Button>
			</div>
			<style jsx>
				{`
        .account-details {
          color: var(--color-primary-100);
          margin: auto;
        }

        .avatar {
          max-width: 16rem;
        }

        h2 {
          text-align: center;
          color: var(--color-primary-300);
        }

        .account-actions {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        :global(button:first-child) {
          border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
          border-bottom: 0;
        }

        :global(button:last-child) {
          border-radius: 0 0 var(--border-radius-lg) var(--border-radius-lg);
        }
    `}
			</style>
		</Layout>
	)
}
