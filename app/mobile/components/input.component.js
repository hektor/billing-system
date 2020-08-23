import {useState} from 'react'
import PropTypes from 'prop-types'

/*
 * Form input component
 */

const Input = ({
  type,
  name,
  placeholder,
  required,
  color,
  value,
  icon,
  ...rest
}) => {
  const [inputVisibility, setInputVisibility] = useState(false)
  return (
    <div className='input'>
      {icon && <div className='icon-container'>{icon}</div>}
      <input
        type={inputVisibility && type === 'password' ? 'text' : type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        {...rest}
      />
      {type === 'password' && (
        <button
          type='button'
          onMouseDown={() => setInputVisibility(true)}
          onMouseUp={() => setInputVisibility(false)}
        >
          Show
        </button>
      )}
      <style jsx>
        {`
          .input {
            display: flex;
          }

          input {
            flex: 1;
            padding-left: ${icon ? '3.6rem' : '1.6rem'};
            border-color: ${color || 'var(--color-primary-300)'};
            ${type === 'password' &&
            `
          border-top-right-radius: 0; 
          border-bottom-right-radius: 0;
          border-right: 0;
          `}
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

          button {
            margin: 0 !important;
            border: 1px solid;
            border-color: ${color || 'var(--color-primary-300)'};
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            transition: 0.16s;
            color: var(--color-primary-500);
          }

          button:hover {
            background: var(--color-primary-100);
          }
        `}
      </style>
    </div>
  )
}

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
