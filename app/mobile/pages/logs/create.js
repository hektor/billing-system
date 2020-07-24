import {useContext, useEffect} from 'react'
import {useMutation} from '@apollo/react-hooks'
import {CREATE_LOG} from '../../apollo'
import Router from 'next/router'
import {RiCloseLine} from 'react-icons/ri'
import {AuthCtx} from '../_app'
import {Layout, Header, Form, BottomNav, Button} from '../../components'
import {createLogForm as form}  from '../../data'

export default () => { 

	const {user} = useContext(AuthCtx)

	const mergeDateTime = (date, time) => {
		return new Date(`
      ${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${time}:00
    `)
	}

	const [CreateLog, {loading, error}] = useMutation(CREATE_LOG)

	const handleSubmit = async e => { 
		e.employeeId = user.id
		e.startTime = mergeDateTime(new Date(), e.startTime)
		e.endTime = mergeDateTime(new Date(), e.endTime)
		e.totalBreakDuration = Number(e.totalBreakDuration)
		e.distance = Number(e.distance)
		e.billingRate = Number(e.billingRate)
		e.transportationCost = Number(e.transportationCost)
		CreateLog({variables: e})
	}
	return (
		<Layout bottomNav>
			<Header title="Create new log" />
			<Form fields={form.fields} onSubmit={handleSubmit}>
				<Button title="Create log" primary type="submit"/>
			</Form>
			<BottomNav>
				<Button onClick={() => Router.replace('/logs')} title="Cancel" icon={<RiCloseLine />} />
			</BottomNav>
			<style jsx>
				{`
        :global(.nav-secondary > button) {
          margin-left: auto;
          min-width: 9.6rem;
          border-radius: var(--border-radius-lg) var(--border-radius-lg) 0 0 !important;
          border-bottom: none !important;
        } 
     `}
			</style>
		</Layout>
	)}
