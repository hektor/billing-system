import {GoPlus} from 'react-icons/go'
import {Layout, Header, FloatingButton, Logs} from '../../components'

export default () => (
	<Layout bottomNav>
		<Header title="My logs" />
		<FloatingButton href="/logs/create" title="New log" icon={<GoPlus/>}/>
		<Logs/>
	</Layout>
)
