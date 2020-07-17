import { GoX } from 'react-icons/go'
import {Layout, Header, BottomNav, FloatingButton} from '../../components'

export default () => (
	<Layout>
		<Header title="New log" />
		<BottomNav />
		<FloatingButton href="/logs" title="Cancel" icon={<GoX/>}/>
	</Layout>
)
