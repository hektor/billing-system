import {Query, GET_CLIENTS} from '../apollo'
import {ListItem} from '../components'
import {CLIENTS} from '../routes'
import {RiPhoneLine, RiBuildingLine} from 'react-icons/ri'

/*
 * List of clients
 */

export default () => (
  <div className='list'>
    <Query query={GET_CLIENTS} id={null}>
      {({clients}) =>
        clients.map(({id, name, phone, address}) => (
          <ListItem key={id} href={`${CLIENTS}/${id}`}>
            <span>{name}</span>
            <div className='actions'>
              {!!phone && <RiPhoneLine />}
              {!!address && <RiBuildingLine />}
            </div>
          </ListItem>
        ))
      }
    </Query>
    <style jsx>{`
      .actions > :global(*) {
        margin: 0 0.4rem;
      }
    `}</style>
  </div>
)
