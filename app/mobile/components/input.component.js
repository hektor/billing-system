import PropTypes from 'prop-types'

const Input = ({ type, name, placeholder, required, error, value, icon, ...rest }) => (
	<div className="input">
		{icon && (
			<div className="icon">
				<i
					data-eva={icon}
					data-eva-animation="pulse"
					data-eva-hover="true"
					data-eva-infinite="true"
					data-eva-fill="var(--color-primary-300)"
				/>
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
          padding-left: ${icon ? '3.6rem' : '0' };
        }

        .icon {
          position: absolute;
          margin: 1.4rem;
          margin-bottom: 1.2rem;
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
	icon: PropTypes.string
}

Input.defaultProps = {
	icon: null,
	placeholder: ''
}

export default Input
