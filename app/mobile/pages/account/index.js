import {useRouter} from 'next/router'
import {GoGear, GoSignOut } from 'react-icons/go'
import { signout } from '../../auth'
import { Layout, Header, Button, GoBack} from '../../components'

export default () => {
	const router = useRouter()
	return (
		<Layout>
			<Header title="My account">
				<GoBack/>
			</Header>
			<div className="account-details">
				<div className="avatar"/>
				<h2>First name</h2>
			</div>
			<div className="account-actions">
				<Button icon={<GoSignOut />} onClick={signout} color='var(--color-danger-900)'>Sign out</Button>
				<Button icon={<GoGear />} onClick={() => router.replace('/account/settings')}>Account settings</Button>
			</div>
			<style jsx>
				{`

        .account-details {
          flex: 1;
          display: flex; 
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: 3.2rem;
        }

        .account-details > h2 {
           margin: 1.6rem;
        }

        .avatar {
          width: 9.6rem;
          height: 9.6rem;
          border-radius: 50%;
          background: var(--color-primary-300);
        }
        
        .account-actions {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        :global(button) {
          margin-top: 1.6rem;
        }
    `}
			</style>
		</Layout>
	)
}
