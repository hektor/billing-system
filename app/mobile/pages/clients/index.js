import { Layout, Header, BottomNav } from '../../components'
import { Clients } from '../../containers'

/*
 * Client list page
 */

export default () => (
  <Layout bottomNav>
    <Header title='My clients' />
    <Clients />
    <BottomNav />
  </Layout>
)
