import { useState } from 'react'
import {
  RiTimeLine,
  RiContactsBook2Line,
  RiArrowLeftLine,
  RiArrowRightLine,
} from 'react-icons/ri'
import { Query, GET_LOGS } from '../apollo'
import { formatDate } from '../utils/date'
import { ListItem } from '../components'
import { LOGS } from '../routes'

/*
 * List of logs for this user
 */

export default ({ filter, sort }) => {
  const [start, setStart] = useState(0)
  return (
    <div className='list'>
      <div className='list-header'>
        <div className='header-item client'>
          <RiContactsBook2Line />
          <span>Client</span>
        </div>
        <div className='header-item date'>
          <RiTimeLine />
          <span>Date</span>
        </div>
      </div>
      <Query
        query={GET_LOGS}
        variables={{
          start,
          filter:
            filter && filter.length > 0 ? { client_id: { id_in: filter } } : {},
          sort,
        }}
      >
        {({ logs }) =>
          logs.map(({ id, client_id, startTime }) => (
            <ListItem key={id} href={`${LOGS}/${id}`}>
              <span>{client_id.name}</span>
              <span>{formatDate(startTime)}</span>
            </ListItem>
          ))
        }
      </Query>
      <div className='pagination'>
        <button
          className='pagination-action'
          onClick={() => start >= 8 && setStart(start - 8)}
        >
          <RiArrowLeftLine />
          Previous
        </button>
        <button
          className='pagination-action'
          onClick={() => setStart(start + 8)}
        >
          Next
          <RiArrowRightLine />
        </button>
      </div>
      <style jsx>
        {`
          .list-header {
            display: flex;
            color: var(--color-primary-700);
          }

          .list-header > * {
            flex: 1;
            display: flex;
            align-items: center;
            padding: 1.6rem;
            border-bottom: 1px solid var(--color-primary-100);
          }

          .header-item:first-child {
            margin-right: 0.8rem;
          }

          .header-item:last-child {
            margin-left: 0.8rem;
          }

          .list-header span {
            margin-left: 0.4rem;
          }

          .date {
            justify-content: flex-end;
          }

          .pagination {
            display: flex;
            justify-content: space-between;
          }

          .pagination-action {
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </div>
  )
}
