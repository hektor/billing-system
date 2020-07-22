import {useRouter} from 'next/router'
import {RiCloseLine} from 'react-icons/ri'
import {Layout, Header, Form, BottomNav, Button} from '../../components'
import {createLogForm as form}  from '../../data'

export default () => { 
	const handleSubmit = async e => console.log(e)
	const router = useRouter()

	return (
		<Layout>
			<Header title="Create new log" />
			<Form fields={form.fields} onSubmit={handleSubmit}/>
			<BottomNav>
				<Button onClick={() => router.replace('/logs')} title="Cancel" icon={<RiCloseLine />} />
			</BottomNav>
			<style jsx>
				{`
        :global(button) {
          margin-left: auto;
          min-width: 9.6rem;
        } 
     `}
			</style>
		</Layout>
	)}
