import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../hooks'
import { FormField } from '../components'

const Form = ({ fields, children, onSubmit, generalErrors }) => {
	const { onChange, values, errors, onSubmit: onFormSubmit, showFeedback, setShowFeedback } = useForm(fields)

	useEffect(() => {
		if(generalErrors) setShowFeedback(false)
	}, [])

	/*
   * Pass form values to parent's onSubmit
   */
	const handleSubmit = (e) => {
		e.preventDefault()
		let values = onFormSubmit(e)
		if (values) onSubmit(values)
	}

	return (
		<form onSubmit={handleSubmit} noValidate>
			{fields && 
        fields.map(
        	field => 
        		<FormField 
        			key={field.name} 
        			{...field} 
        			setField={onChange} 
        			value={values[field.name]} 
        			error={errors[field.name]} 
        			showFeedback={showFeedback} 
        		/>
        )}
			{children}
		</form>
	)
}

Form.propTypes = {
	title: PropTypes.string,
	fields: PropTypes.arrayOf(PropTypes.object).isRequired,
	onSubmit: PropTypes.func.isRequired,
	children: PropTypes.arrayOf(PropTypes.element)
}

export default Form
