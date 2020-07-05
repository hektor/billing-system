import css from 'styled-jsx/css'

export default css.global`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

	:root {
		--base: 1rem;
		--font: Inter, Helvetica, Arial;
		--border-radius: 0.25rem;
    --color-primary: #555;
  }

  /* hide scrollbar */
  ::-webkit-scrollbar {
    width: 0; /* scrollbar space */
    background: transparent; /*   make scrollbar invisible */
  }


	body {
		font-family: var(--font);
		font-size: var(--base);
  }

  .hidden,
  [hidden] {
      display: none !important;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
 
	button {
		display: flex;
		flex-direction: row;
    padding: 1.6rem;
    outline: none;
		border: none;
    border-radius: var(--border-radius); 
    font-weight: 500;
	}
  
	button > svg {
		height: 1rem;
		margin-right: 0.5rem;
	} 

  .-primary-bg {
    background: var(--color-primary);
    color: #fff;
  }

  .-primary {
    color: var(--color-primary);
  }

  a {
    outline: none;
    color: inherit;
    text-decoration: none;
    transition: .1s cubic-bezier(0.2, 0, 0,38, 0.9)
    font-weight: 500;
  }

	.-outline {
		background: transparent;
		border: 1px solid;
	}

	form {
		display: flex;
		flex-direction: column;
    max-width: 32rem;
	}

	label {
    margin: 0.8rem 0;
	}

	input,
	select,
	textarea {
		border-radius: var(--border-radius);
		border: 1px solid #eee;
    background: inherit;
		padding: 1.6rem;
    margin-bottom: 1.6rem;
	}

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    font-weight: 400;
  }
`
