import {useRouter} from 'next/router'
import {GoPlus} from 'react-icons/go'
import {Layout, Header, BottomNav, Button } from '../../components'
import {Logs} from '../../containers'
import { FaFilter, FaSearch } from 'react-icons/fa'

export default () => {
	const router = useRouter()
	return (
		<Layout>
			<Header title="My logs" />
			<Logs/>
			<BottomNav>
				<div className="actions">
					<div className="action search">
						<FaSearch/>
					</div>
					<div className="action filter">
						<FaFilter/>
					</div>
				</div>
				<Button primary onClick={() => router.replace('/logs/create')} title="New log" icon={<GoPlus/>}/>
			</BottomNav>
			<style jsx>
				{`
        :global(button) {
          justify-content: center;
          margin-left: auto;
          min-width: 9.6rem;
        } 

        .container {
          display: flex;
          flex-direction: column;
          margin-right: auto;
          color: var(--color-primary-400);
        }

        .actions {
          display: flex;
          background: var(--color-primary-100);
          color: var(--color-primary-400);
          border-radius: var(--border-radius-lg);
        }

        .search {
          border-right: .2rem solid var(--color-white);
        }

        .action {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.6rem;
        }
     `}
			</style>
		</Layout>
	)}
