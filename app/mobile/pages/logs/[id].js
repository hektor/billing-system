import {Layout, GoBack} from '../../components'
import {Log} from '../../containers'

export default () => (
	<Layout bottomNav>
		<Log />
		<GoBack title="Logs overview"/>
	</Layout>
)
