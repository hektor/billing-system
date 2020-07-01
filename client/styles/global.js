import css from 'styled-jsx/css'

export default css.global`
	:root {
		--base: 1rem;
		--font: Inter, Helvetica, Arial;
		--border-radius: 0.25rem;
    --color-primary: #555 }

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
 
  .btn,
	button {
		display: flex;
		flex-direction: row;
		align-items: center;
    padding: 1rem;
    outline: none;
		border: none;
    border-radius: var(--border-radius); 
    font-weight: 500;
    transition: .1s cubic-bezier(0.2, 0, 0,38, 0.9);
	}
  
  .btn,
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
    margin: 0.5rem 0;
	}

	input,
	select,
	textarea {
    box-sizing: border-box;
		padding: 1rem;
		border-radius: var(--border-radius);
		border: 1px solid #eee;
    margin-bottom: 1rem;
	}

  h1,h2,h3,h4,h5,h6 {
    margin-top: 0;
    margin-bottom: 2rem;
    font-weight: 400;
  }

  h1 {
    margin-bottom: 3rem;
  }
`
