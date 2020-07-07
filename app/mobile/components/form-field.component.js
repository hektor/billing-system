import { useEffect } from 'react'
import { GoCheck, GoX, GoInfo } from 'react-icons/go'
import { useState } from 'react'
import PropTypes from 'prop-types'

import { useInput } from '../hooks'
import {Input, Dropdown, Modal } from '.'

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
	const {DROPDOWN} = inputTypes
	const {showFeedback, setShowFeedback, setValue, bind} = useInput({value: '' })
	const [showInfo, setShowInfo] = useState(false)

	const handleChange = (e) => {
		setField(e.target)
		bind.onChange(e)
	}

	useEffect(() => {
		if (showSubmitFeedback !== undefined) setShowFeedback(showSubmitFeedback)
	}, [showSubmitFeedback])

	const getInputByType = () => {
		switch (type) {
		case DROPDOWN:
			return (
				<Dropdown
					name={name}
					value={value}
					required={required}
					icon={icon}
					color={showFeedback && (error ? 'var(--color-warning-600)' : 'var(--color-success-600)')}
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
					color={showFeedback && (error ? 'var(--color-warning-600)' : 'var(--color-success-600)')}
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
								error ? <GoX/> : <GoCheck/>
							)}
						</div>
					</div>
					{label && <label htmlFor={name}>{label}</label>}
					<Modal toggle={showInfo}>
						<div className="modal-header">
							<h3>{info}</h3>
							<a className="close-modal" onClick={() => setShowInfo(false)}>
								<span>Close</span>
								<GoX/>
							</a>
						</div>
					</Modal>
					{info && <a className="open-modal" onClick={() => setShowInfo(!showInfo)}><GoInfo/></a>}
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
            color: ${showFeedback ? (error ? 'var(--color-warning-700)' : 'var(--color-success-700)') : 'inherit'};
            margin-right: auto;
          }

          .feedback-badge {
            position: relative;
            display: flex;
            width: 1.6rem;
            height: 1.5rem;
            border-radius: 50%;
            color: ${error ? 'var(--color-warning-500)' : 'var(--color-success-500)'};
            opacity: ${showFeedback ? 1 : 0};
            transform: scale(${showFeedback ? 1 : 0});
            transition: 150ms ease;
          }

          .feedback {
            color: var(--color-warning-700);
            min-height: 2rem;
            padding: 0.4rem 0;
            margin: 0 1.6rem;
          }

          .modal-header {
            display: flex;
            align-items: center;
          }

          .open-modal {
            margin-right: 0.6rem;
          }

          .close-modal {
            display: flex;
            align-items: center;
            margin-left: auto;
          }

          .close-modal > span {
            margin-right: 0.8rem;
            margin-bottom: 0.2rem;
          }
        `}
			</style>
		</div>
	)
}

FormField.propTypes = {
	icon: PropTypes.element,
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
