import PropTypes from 'prop-types'

const Dropdown = ({ name, placeholder, options, value, required, icon, ...rest }) => (
	<div className="dropdown">
		<div className="icon">{icon}</div>
		<select name={name} {...rest} value={value}>
			{placeholder && (
				<option value='' placeholder={placeholder}>
					{placeholder}
				</option>
			)}
			{options.map(({value, label}, id) => (
				<option key={id.toString()} value={value}>{label}</option>
			))}
		</select>
		<style jsx>
			{`
        .dropdown {
          display: flex;
        }

        .icon {
          padding: 1.2rem 1.4rem;
          padding-top: 1.4rem;
		      border: 1px solid var(--color-primary-300);
          border-right: 0;
          border-radius: var(--border-radius) 0 0 var(--border-radius);
        }

        select {
          flex: 1;
          border-radius: 0 var(--border-radius) var(--border-radius) 0;
        }
      `}
		</style>
	</div>
)

Dropdown.propTypes = {
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.string),
	value: PropTypes.string
}

export default Dropdown
