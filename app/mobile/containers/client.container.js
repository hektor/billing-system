import { useRouter } from 'next/router'
import { Query, GET_CLIENT } from '../apollo'
import { Header, Button } from '../components'
import { RiPhoneLine, RiMailLine } from 'react-icons/ri'

/*
 * Client details
 */

export default () => (
  <Query query={GET_CLIENT} variables={{ id: useRouter().query.id }}>
    {({ client }) => {
      const { name, email, phone, address } = client
      return (
        <>
          <Header title={name} />
          <div className='client'>
            <h2>Contact details</h2>
            <div className='card'>
              <span>{phone}</span>
            </div>
            {address && (
              <>
                <h2>Location</h2>
                <div className='card'>
                  <span>
                    {`
                      ${address.streetName} ${address.streetNumber}, 
                    `}
                    <br />
                    {`
                      ${address.postalCode} ${address.city},
                    `}
                    <br />
                    {`
                      ${address.country} ${address.province}
                    `}
                  </span>
                </div>
              </>
            )}
          </div>
          <div className='actions'>
            {/*
            <Button
              title='View logs'
              icon={<RiClipboardLine />}
              className='action-left'
            />
            */}
            {email && (
              <a className='action action-left' href={`mailto:${email}`}>
                <Button title='Mail' icon={<RiMailLine />} />
              </a>
            )}
            <a className='action action-right' href={`tel:${phone}`}>
              <Button title='Call' icon={<RiPhoneLine />} />
            </a>
          </div>
          <style jsx>
            {`
              .client {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
              }

              h2 {
                color: var(--color-primary-600);
                padding: 1.6rem 0 0.8rem 1.6rem;
              }

              .card {
                padding: 0 1.6rem;
                border-left: 1px solid var(--color-primary-100);
              }

              .actions {
                margin-top: auto;
                margin-bottom: 1.6rem;
                display: flex;
              }

              .actions > a {
                flex: 1;
                display: flex;
              }

              .action-left :global(button) {
                width: 100%;
                border-radius: var(--border-radius) 0 0 var(--border-radius);
              }

              .action-right :global(button) {
                width: 100%;
                border-left: 0;
                border-radius: 0 var(--border-radius) var(--border-radius) 0;
              }
            `}
          </style>
        </>
      )
    }}
  </Query>
)
