import {useState} from 'react'
import Router from 'next/router'
import {RiFileAddLine, RiFilter2Line, RiSearch2Line, RiCloseLine} from 'react-icons/ri'
import {Layout, Header, BottomNav, Button, Modal } from '../../components'
import {Logs} from '../../containers'

export default () => {

	const [toggled, setToggled] = useState(null)

	const toggleSearch = () => setToggled(toggled === 'search' ? null : 'search')
	const toggleFilter = () => setToggled(toggled === 'filter' ? null : 'filter')  

	return (
		<Layout bottomNav>
			<Modal bottom toggle={toggled === 'search'}>
				<div className="modal-header">
					<h2>Search logs</h2>
					<button onClick={toggleSearch}>
						<RiCloseLine size="32"/>
					</button>
				</div>
			</Modal>
			<Modal bottom toggle={toggled === 'filter'}>
				<div className="modal-header">
					<h2>Filter logs</h2>
					<button onClick={toggleFilter}>
						<RiCloseLine size="32"/>
					</button>
				</div>
			</Modal>
			<Header title="My logs" />
			<Logs/>
			<BottomNav>
				<div className="actions">
					<button onClick={toggleSearch} className={`action search ${toggled === 'search' && 'active'}`}>
						<RiSearch2Line/>
						<span>Search</span>
					</button>
					<button onClick={toggleFilter} className={`action filter ${toggled === 'filter' && 'active'}`}>
						<RiFilter2Line/>
						<span>Filter</span>
					</button>
				</div>
				<Button primary onClick={() => Router.replace('/logs/create')} title="New log" icon={<RiFileAddLine />} />
			</BottomNav>
			<style jsx>
				{`
          :global(.nav-secondary > button:last-child) {
            margin-left: auto;
            min-width: 9.6rem;
            border: .2rem solid var(--color-white) !important;
            border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0 !important;
          }

          .actions {
            display: flex;
            border: .2rem solid var(--color-white);
            border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0;
          }

          .action {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 0 1.6rem;
            color: var(--color-primary-400);
            background: var(--color-primary-100);
            cursor: pointer;
            transition: .16s;
          }

          .action.active {
            background: var(--color-primary-300);
            color: var(--color-primary-600);
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

          .search {
            border-right: .2rem solid var(--color-white);
          }

          .action > span {
            margin: 0;
            margin-top: 0.4rem;
          }

          .modal-header {
            display: flex;
            align-items: center;
          }

          .modal-header > h2 {
            margin-right: auto;
          }

          .modal-header > button {
            padding: 0.8rem;
          }

          @media (min-width: 480px) {
            .action {
              flex-direction: row;
            } 

            .action > span {
              margin: 0;
              margin-left: 0.4rem;
            }
          }
       `}
			</style>
		</Layout>
	)
}
