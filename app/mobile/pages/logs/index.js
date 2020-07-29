import {useState} from 'react'
import Router from 'next/router'
import {
  RiFileAddLine,
  RiFilter2Line,
  RiFilter3Line,
  RiCloseLine
} from 'react-icons/ri'
import {Layout, Header, BottomNav, Button, Modal, Form} from '../../components'
import {Logs} from '../../containers'
import {filterLogsForm} from '../../data'
import {sortLogsForm} from '../../data'
import {CREATE_LOG} from '../../routes'

/*
 * Log list page
 */

export default () => {
  // for multiselect
  //const handleSubmit = e => setFilter([...filter, Number(e.byClient)])

  const handleFilterSubmit = e => setFilter(e.byClient)
  const handleSortSubmit = e => setSort(e.sort)

  const [toggled, setToggled] = useState(null)
  const [filter, setFilter] = useState([])
  const [sort, setSort] = useState('updated_at:desc')

  const toggleSort = () => setToggled(toggled === 'sort' ? null : 'sort')
  const toggleFilter = () => setToggled(toggled === 'filter' ? null : 'filter')

  return (
    <Layout bottomNav>
      <Modal bottom toggle={toggled === 'sort'}>
        <div className='modal-header'>
          <h2>Sort logs</h2>
          <button onClick={toggleSort}>
            <RiCloseLine size='32' />
          </button>
        </div>
        <Form fields={sortLogsForm.fields} onSubmit={handleSortSubmit}>
          <div className='filter-actions'>
            <Button primary type='submit' onClick={toggleSort}>
              Sort
            </Button>
          </div>
        </Form>
      </Modal>
      <Modal bottom toggle={toggled === 'filter'}>
        <div className='modal-header'>
          <h2>Filter logs</h2>
          <button onClick={toggleFilter}>
            <RiCloseLine size='32' />
          </button>
        </div>
        <Form fields={filterLogsForm.fields} onSubmit={handleFilterSubmit}>
          <div className='filter-actions'>
            <Button primary type='submit' onClick={toggleFilter}>
              Filter
            </Button>
            <Button onClick={() => setFilter([])}>Clear filters</Button>
          </div>
        </Form>
      </Modal>
      <Header title='My logs' />
      <Logs filter={filter} sort={sort} />
      <BottomNav>
        <div className='actions'>
          <button
            onClick={toggleSort}
            className={`action sort ${toggled === 'sort' && 'active'}`}
          >
            <RiFilter3Line />
            <span>Sort</span>
          </button>
          <button
            onClick={toggleFilter}
            className={`action filter ${toggled === 'filter' && 'active'}`}
          >
            <RiFilter2Line />
            <span>Filter</span>
          </button>
        </div>
        <Button
          primary
          onClick={() => Router.replace(CREATE_LOG)}
          title='New log'
          icon={<RiFileAddLine />}
        />
      </BottomNav>
      <style jsx>
        {`
          :global(.nav-secondary > button:last-child) {
            margin-left: auto;
            min-width: 9.6rem;
            border: 0.2rem solid var(--color-white) !important;
            border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0 !important;
          }

          .actions {
            display: flex;
            border: 0.2rem solid var(--color-white);
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
            transition: 0.16s;
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

          .sort {
            border-right: 0.2rem solid var(--color-white);
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

          .filter-actions {
            display: flex;
          }

          .filter-actions > :global(button) {
            flex: 1;
          }

          .filter-actions > :global(button:first-child) {
            border-radius: var(--border-radius) 0 0 var(--border-radius);
          }

          .filter-actions > :global(button:last-child) {
            border-left: 0;
            border-radius: 0 var(--border-radius) var(--border-radius) 0;
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
