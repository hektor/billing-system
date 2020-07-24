import { getPrimaryColors, getHeadingSizes } from './helpers'
import css from 'styled-jsx/css'

export default css.global`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

	:root {
		--base: 1rem;
		--font-family: Inter, Helvetica, Arial;
    --font-size: 16px;
    --font-size-h1: calc(var(--base) * 3.2 );
    --font-size-h2: calc(var(--base) * 2.8);
    --font-size-h3: calc(var(--base) * 2.4);
    --font-size-h4: calc(var(--base) * 2);
    --font-size-h5: calc(var(--base) * 1.6);
    --font-size-h6: calc(var(--base) * 1.2);
		--border-radius: 0.4rem;
		--border-radius-lg: 0.8rem;
    --color-white: #fff;
    ${getPrimaryColors()}
    --color-success-100: #F1FCDA;
    --color-success-200: #DFF9B7;
    --color-success-300: #C4EE90;
    --color-success-400: #A7DE70;
    --color-success-500: #7FC844;
    --color-success-600: #61AC31;
    --color-success-700: #479022;
    --color-success-800: #307415;
    --color-success-900: #1F600D;
    --color-success-transparent-100: rgba(127, 200, 68, 0.08);
    --color-success-transparent-200: rgba(127, 200, 68, 0.16);
    --color-success-transparent-300: rgba(127, 200, 68, 0.24);
    --color-success-transparent-400: rgba(127, 200, 68, 0.32);
    --color-success-transparent-500: rgba(127, 200, 68, 0.4);
    --color-success-transparent-600: rgba(127, 200, 68, 0.48);
    --color-info-100: #F2F8FC;
    --color-info-200: #E5F1FA;
    --color-info-300: #D3E2F0;
    --color-info-400: #BFD0E2;
    --color-info-500: #A5B8D0;
    --color-info-600: #788FB2;
    --color-info-700: #536A95;
    --color-info-800: #344978;
    --color-info-900: #1F3163;
    --color-info-transparent-100: rgba(165, 184, 208, 0.08);
    --color-info-transparent-200: rgba(165, 184, 208, 0.16);
    --color-info-transparent-300: rgba(165, 184, 208, 0.24);
    --color-info-transparent-400: rgba(165, 184, 208, 0.32);
    --color-info-transparent-500: rgba(165, 184, 208, 0.4);
    --color-info-transparent-600: rgba(165, 184, 208, 0.48);
    --color-warning-100: #FEF9D3;
    --color-warning-200: #FDF3A9;
    --color-warning-300: #F9E87D;
    --color-warning-400: #F3DC5B;
    --color-warning-500: #ebca28;
    --color-warning-600: #CAA91D;
    --color-warning-700: #A98A14;
    --color-warning-800: #886C0C;
    --color-warning-900: #705707;
    --color-warning-transparent-100: rgba(235, 202, 40, 0.08);
    --color-warning-transparent-200: rgba(235, 202, 40, 0.16);
    --color-warning-transparent-300: rgba(235, 202, 40, 0.24);
    --color-warning-transparent-400: rgba(235, 202, 40, 0.32);
    --color-warning-transparent-500: rgba(235, 202, 40, 0.4);
    --color-warning-transparent-600: rgba(235, 202, 40, 0.48);
    --color-danger-100: #FEECDE;
    --color-danger-200: #FDD4BE;
    --color-danger-300: #FBB69D;
    --color-danger-400: #F79983;
    --color-danger-500: #F26B5B;
    --color-danger-600: #D04642;
    --color-danger-700: #AE2D34;
    --color-danger-800: #8C1D2C;
    --color-danger-900: #741126;
    --color-danger-transparent-100: rgba(242, 107, 91, 0.08);
    --color-danger-transparent-200: rgba(242, 107, 91, 0.16);
    --color-danger-transparent-300: rgba(242, 107, 91, 0.24);
    --color-danger-transparent-400: rgba(242, 107, 91, 0.32);
    --color-danger-transparent-500: rgba(242, 107, 91, 0.4);
    --color-danger-transparent-600: rgba(242, 107, 91, 0.48);
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    font-weight: 400;
  }

  ${getHeadingSizes()}

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

	body {
		font-family: var(--font-family);
		font-size: var(--font-size);
    color: var(--color-primary-700);
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
    padding: 1.6rem 1.4rem;
    outline: none;
		border: none;
    border-radius: var(--border-radius); 
    font-weight: 500;
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
    max-width: 48rem;
	}

  form:last-child button {
    margin-top: 1.6rem; 
  }

	label {
    margin: 0.8rem 0;
	}

	input,
	select,
	textarea {
		border-radius: var(--border-radius);
		border: 1px solid var(--color-primary-300);
    background: inherit;
		padding: 1.6rem;
	}
`
