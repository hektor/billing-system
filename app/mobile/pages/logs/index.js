import {GoPlus} from 'react-icons/go'
import {Layout, Header, FloatingButton} from '../../components'
import {Logs} from '../../containers'

export default () => (
	<Layout bottomNav>
		<Header title="My logs" />
		<Logs/>
		<FloatingButton href="/logs/create" title="New log" icon={<GoPlus/>}/>
	</Layout>
)
