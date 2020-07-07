import PropTypes from 'prop-types'

const Input = ({ type, name, placeholder, required, color, value, icon, ...rest }) => (
	<div className="input">
		{icon && (
			<div className="icon-container">
				{icon}
			</div>
		)}
		<input
			type={type}
			name={name}
			placeholder={placeholder}
			required={required}
			value={value}
			{...rest}
		/>
		<style jsx>
			{`
        .input {
          display: flex;
        }

        input {
          flex: 1;
          padding-left: ${icon ? '3.6rem' : '0'};
          border-color: ${color || 'var(--color-primary-300)'};
        }

        input::placeholder {
          color: ${color || 'var(--color-primary-300)'};
        }

        .icon-container {
          position: absolute;
          margin: 1.4rem;
        }

        .input :global(.icon) {
          color: ${color || 'var(--color-primary-300)'};
        }
      `}
		</style>
	</div>
)

Input.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	error: PropTypes.string,
	value: PropTypes.string,
	icon: PropTypes.element
}

Input.defaultProps = {
	icon: null,
	placeholder: ''
}

export default Input
