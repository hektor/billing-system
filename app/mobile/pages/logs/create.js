import { GoX } from 'react-icons/go'
import { Layout, Header, Form, BottomNav, FloatingButton } from '../../components'
import { createLogForm as form }  from '../../data'

export default () => { 
	const handleSubmit = async e => console.log(e)

	return (
		<Layout>
			<Header title="Create new log" />
			<Form fields={form.fields} onSubmit={handleSubmit}/>
			<BottomNav />
			<FloatingButton href="/logs" title="Cancel" icon={<GoX/>}/>
		</Layout>
	)}
