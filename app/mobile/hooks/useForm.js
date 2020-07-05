import { useState, useEffect } from 'react'
import { validator } from '../validate'

export default (fields, initialIsValid) => {
	const [values, setValues] = useState({})
	const [errors, setErrors] = useState({})
	const [showFeedback, setShowFeedback] = useState(false)
	const [isValid, setIsValid] = useState(initialIsValid)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const validate = () => {
		const validateErrors = {}
		fields.map(({ name }) => {
			if (validator[name] !== undefined) {
				let error
				error = validator[name](values[name]).error
				validateErrors[name] = error
			}
		})
		setErrors(validateErrors)

		const isEmpty = Object.keys(values).length === 0
		const hasEmptyValues = Object.values(values).some((value) => value === '')
		const hasErrorValues = Object.values(validateErrors).some((error) => error !== null)

		if (!isEmpty && !hasEmptyValues && !hasErrorValues) {
			setIsValid(true)
		} else {
			setIsValid(false)
		}
	}

	useEffect(() => {
		validate()
	}, [values])

	/*
	useEffect(() => {
		const fieldNames = fields.reduce((all, field) => all.concat(field.name), [])
		console.log(fieldNames.find(({ name }) => name === values[name]))
		setIsValid(false)
	}, [isSubmitting])
  */

	return {
		isValid,
		setIsValid,
		values,
		setValues,
		errors,
		showFeedback,
		onSubmit: () => {
			if (isValid) {
				setIsSubmitting(true)
				setShowFeedback(false)
				return values
			} else {
				setShowFeedback(true)
				return false
			}
		},
		onChange: (field) => {
			const { name, value } = field
			setValues({
				...values,
				[name]: value
			})
		}
	}
}
