import PropTypes from 'prop-types'
import { useForm } from '../hooks'
import { FormField } from '../components'

const Form = ({ fields, children, onSubmit }) => {
	const { onChange, values, errors, isValid, onSubmit: onFormSubmit, showFeedback } = useForm(fields)

	/*
   * Render fields from fields prop
   */
	const renderFields = () =>
		fields.map((field) => (
			<FormField
				key={field.name}
				{...field}
				setField={onChange}
				showFeedback={showFeedback}
				value={values[field.name]}
				error={errors[field.name]}
			/>
		))

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
			{fields && renderFields()}
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
