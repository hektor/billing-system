import { useEffect } from 'react'
import PropTypes from 'prop-types'

import * as eva from 'eva-icons'

import { useInput } from '../hooks'
import {Input, Dropdown} from '.'

export const inputTypes = {
	DROPDOWN: 'dropdown',
}

const FormField = ({
	type,
	name,
	info,
	required,
	label,
	icon,
	error,
	setField,
	value,
	showFeedback: showSubmitFeedback,
	...rest
}) => {
	const { DROPDOWN } = inputTypes
	const { showFeedback, setShowFeedback, setValue, bind } = useInput('')

	useEffect(() => {
		eva.replace()
	}, [])

	useEffect(() => {
		if (value) setValue(value)
		if (showSubmitFeedback) setShowFeedback(true)
	}, [showSubmitFeedback])

	const handleChange = (e) => {
		setField(e.target)
		bind.onChange(e)
	}

	const getInputByType = () => {
		switch (type) {
		case DROPDOWN:
			return (
				<Dropdown
					name={name}
					value={value}
					required={required}
					icon={icon}
					{...rest}
					{...bind}
					onChange={handleChange}
				/>
			)
		default:
			return (
				<Input
					type={type}
					name={name}
					value={value}
					required={required}
					icon={icon}
					{...rest}
					{...bind}
					onChange={handleChange}
				/>
			)
		}
	}

	return (
		<div className="form-field">
			<div className="field-header">
				<div className="field-label">
					<div className="feedback-badge">
						<div className="feedback-icon">
							{showFeedback && (
								error ? 
									<i
										data-eva={icon}
										data-eva-animation="pulse"
										data-eva-hover="true"
										data-eva-infinite="true"
										data-eva-fill="#555"
									/>
									: 
									<i
										data-eva={icon}
										data-eva-animation="pulse"
										data-eva-hover="true"
										data-eva-infinite="true"
										data-eva-fill="#555"
									/>
							)}
						</div>
					</div>
					{label && <label htmlFor={name}>{label}</label>}
					{info && <a className="info-text">{info}</a>}
				</div>
			</div>
			{getInputByType()}
			{<p className="feedback">{showFeedback && error}</p>}
			<style jsx>
				{`
          .form-field {
            display: flex;
            flex-direction: column;
          }

          .field-label {
            display: flex;
            align-items: center;
          }

          label {
            padding: 0.8rem 0;
            margin-right: auto;
          }

          .info-text {
            text-decoration: underline;
          }

          .feedback-badge {
            position: relative;
            display: flex;
            width: 1.6rem;
            height: 1.6rem;
            background: red;
            border-radius: 50%;
            background: ${error ? 'var(--color-warning)' : 'var(--color-success)'};
            border: 1px solid #eee;
            opacity: ${showFeedback ? 1 : 0};
            transform: scale(${showFeedback ? 1 : 0});
            transition: 150ms ease;
          }

          .feedback-icon {
            color: var(--color-white);
          }

          .feedback {
            color: var(--color-warning);
            min-height: 2rem;
            padding: 0.4rem;
            margin: 0 1.6rem;
          }
        `}
			</style>
		</div>
	)
}

FormField.propTypes = {
	icon: PropTypes.string,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	info: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
	required: PropTypes.bool,
	label: PropTypes.string,
	error: PropTypes.string,
	setField: PropTypes.func,
	showFeedback: PropTypes.bool
}

FormField.defaultProps = {
	icon: null
}

export default FormField
