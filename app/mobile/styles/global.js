import { getHeadingSizes } from './helpers'
import css from 'styled-jsx/css'

/*
 * Global CSS
 */

export default css.global`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  :root {
    --font-family: Inter, Helvetica, Arial;
    --font-size: 16px;

    --border-radius-sm: 0.2rem;
    --border-radius: 0.4rem;
    --border-radius-lg: 0.8rem;

    --color-white: #fff;
    --color-primary-100: #ccedf8;
    --color-primary-200: #9cd8f2;
    --color-primary-300: #66afd9;
    --color-primary-400: #3c82b3;
    --color-primary-500: #0f4c81;
    --color-success-100: #f1fcda;
    --color-success-200: #dff9b7;
    --color-success-300: #c4ee90;
    --color-success-400: #a7de70;
    --color-success-500: #7fc844;
    --color-success-600: #61ac31;
    --color-success-700: #479022;
    --color-success-800: #307415;
    --color-success-900: #1f600d;
    --color-success-transparent-100: rgba(127, 200, 68, 0.08);
    --color-success-transparent-200: rgba(127, 200, 68, 0.16);
    --color-success-transparent-300: rgba(127, 200, 68, 0.24);
    --color-success-transparent-400: rgba(127, 200, 68, 0.32);
    --color-success-transparent-500: rgba(127, 200, 68, 0.4);
    --color-success-transparent-600: rgba(127, 200, 68, 0.48);
    --color-info-100: #f2f8fc;
    --color-info-200: #e5f1fa;
    --color-info-300: #d3e2f0;
    --color-info-400: #bfd0e2;
    --color-info-500: #a5b8d0;
    --color-info-600: #788fb2;
    --color-info-700: #536a95;
    --color-info-800: #344978;
    --color-info-900: #1f3163;
    --color-info-transparent-100: rgba(165, 184, 208, 0.08);
    --color-info-transparent-200: rgba(165, 184, 208, 0.16);
    --color-info-transparent-300: rgba(165, 184, 208, 0.24);
    --color-info-transparent-400: rgba(165, 184, 208, 0.32);
    --color-info-transparent-500: rgba(165, 184, 208, 0.4);
    --color-info-transparent-600: rgba(165, 184, 208, 0.48);
    --color-warning-100: #fef9d3;
    --color-warning-200: #fdf3a9;
    --color-warning-300: #f9e87d;
    --color-warning-400: #f3dc5b;
    --color-warning-500: #ebca28;
    --color-warning-600: #caa91d;
    --color-warning-700: #a98a14;
    --color-warning-800: #886c0c;
    --color-warning-900: #705707;
    --color-warning-transparent-100: rgba(235, 202, 40, 0.08);
    --color-warning-transparent-200: rgba(235, 202, 40, 0.16);
    --color-warning-transparent-300: rgba(235, 202, 40, 0.24);
    --color-warning-transparent-400: rgba(235, 202, 40, 0.32);
    --color-warning-transparent-500: rgba(235, 202, 40, 0.4);
    --color-warning-transparent-600: rgba(235, 202, 40, 0.48);
    --color-danger-100: #feecde;
    --color-danger-200: #fdd4be;
    --color-danger-300: #fbb69d;
    --color-danger-400: #f79983;
    --color-danger-500: #f26b5b;
    --color-danger-600: #d04642;
    --color-danger-700: #ae2d34;
    --color-danger-800: #8c1d2c;
    --color-danger-900: #741126;
    --color-danger-transparent-100: rgba(242, 107, 91, 0.08);
    --color-danger-transparent-200: rgba(242, 107, 91, 0.16);
    --color-danger-transparent-300: rgba(242, 107, 91, 0.24);
    --color-danger-transparent-400: rgba(242, 107, 91, 0.32);
    --color-danger-transparent-500: rgba(242, 107, 91, 0.4);
    --color-danger-transparent-600: rgba(242, 107, 91, 0.48);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: 400;
  }

  ${getHeadingSizes()}

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  body {
    background: var(--color-white);
    color: var(--color-primary-500);
    font-family: var(--font-family);
    font-size: var(--font-size);
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

  a {
    outline: none;
    color: inherit;
    text-decoration: none;
    transition: 0.1s cubic-bezier(0.2, 0, 0, 38, 0.9);
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

  select {
    color: var(--color-primary-500);
  }

  button {
    display: flex;
    flex-direction: row;
    padding: 1.6rem 1.4rem;
    border: none;
    border-radius: var(--border-radius);
    background: transparent;
    font-weight: 500;
    cursor: pointer;
  }
`
