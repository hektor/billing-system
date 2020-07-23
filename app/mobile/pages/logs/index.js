import Router from 'next/router'
import {RiFileAddLine, RiFilter2Line, RiSearch2Line} from 'react-icons/ri'
import {Layout, Header, BottomNav, Button } from '../../components'
import {Logs} from '../../containers'

export default () => (
	<Layout>
		<Header title="My logs" />
		<Logs/>
		<BottomNav>
			<div className="actions">
				<div className="action search">
					<RiSearch2Line/>
					<span>Search</span>
				</div>
				<div className="action filter">
					<RiFilter2Line/>
					<span>Filter</span>
				</div>
			</div>
			<Button primary onClick={() => Router.replace('/logs/create')} title="New log" icon={<RiFileAddLine />} />
		</BottomNav>
		<style jsx>
			{`

        :global(button) {
          margin-left: auto;
          min-width: 9.6rem;
          border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0 !important;
        } 

        .actions {
          display: flex;
        }

        .action {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.6rem;
          color: var(--color-primary-400);
          background: var(--color-primary-100);
          cursor: pointer;
          transition: .16s;
        }

        .action:first-child {
          border-radius: var(--border-radius-lg) 0 0 0;
        }

        .action:last-child {
          border-radius: 0 var(--border-radius-lg) 0 0;
        }

        .action:hover {
          color: var(--color-primary-700);
          background: var(--color-primary-300);
        }

        .action > span {
          margin-left: 0.8rem;
        }

        .search {
          border-right: .2rem solid var(--color-white);
        }
     `}
		</style>
	</Layout>
)
