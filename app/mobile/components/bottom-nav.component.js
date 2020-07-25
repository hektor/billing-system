import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {RiClipboardLine, RiDashboardLine, RiContactsBook2Line} from 'react-icons/ri'
import {useLoading} from '../hooks'
import {Spinner} from '.'

/*
 * Tab component for bottom navigation
 */

const Tab = ({href, title, icon}) => {
	const {load, isLoading} = useLoading()
	return (
		<>
			<Link href={href}>
				<a onClick={`/${useRouter().pathname.split('/')[1]}` !== href && load} className={`/${useRouter().pathname.split('/')[1]}` === href && 'active'}>
					{isLoading ? <Spinner size="32"/> : icon}
					<span>{title}</span>
				</a>
			</Link>
			<style jsx>
				{`
          a {
            flex: 1;
            display: flex;
            flex-direction: column;
            min-height: 4.8rem;
            padding: 0.8rem;
            margin: 0.8rem;
            align-items: center;
            justify-content: center;
            border-radius: var(--border-radius-lg);
            border: .2rem solid var(--color-white);
            opacity: 0.5;
            transition: .16s;
          }

          a:first-child {
            border-bottom-left-radius: 1.6rem;
            margin-right: 0;
          }

          a:last-child {
            border-bottom-right-radius: 1.6rem;
            margin-left: 0;
          }

          @media(min-width: 480px) {
            a { 
              flex-direction: row;
            }
          }

          a:hover {
            opacity: 1;
            color: var(--color-primary-700);
            background: var(--color-primary-100);
          }

          a > span {
            margin-left: 0.4rem;
          }

          .active {
            color: var(--color-primary-700);
            border: .2rem solid var(--color-primary-100);
            opacity: 1;
          }

          .active::after {
            content: '';
            position: absolute;
            bottom: 0.8rem;
            height: .4rem;
            width: 3.2rem;
            border-radius: var(--border-radius);
            background: var(--color-primary-700);
          }
        `}
			</style>
		</>
	)}

/*
 * Bottom navigation
 */

export default ({ children }) => {

	/*
   * Track scroll position
   */

	const [scrollY, setScrollY] = useState(0)
	useEffect(() => {
		window.addEventListener('scroll', setScrollY(window.pageYOffset))
	}, [])

	/*
   * Tab data
   */

	const tabs = [
		{ href: '/logs', title: 'Logs', icon: <RiClipboardLine size="32"/> },
		{ href: '/dashboard', title: 'Dashboard', icon: <RiDashboardLine size="32"/> },
		{ href: '/clients', title: 'Clients', icon: <RiContactsBook2Line size="32"/> },
	]
  
	return (
		<>
			<nav>
				{tabs.map(({href, title, icon}, id) => <Tab href={href} title={title} icon={icon} key={id}/>)}
				{children && (
					<div className={`nav-secondary ${scrollY > 240 && 'nav-secondary-hidden'}`}>
						{children}
					</div>
				)}
			</nav>
			<style jsx>
				{`
          nav {
            z-index: 1000;
            position: fixed;
            bottom: 0rem;
            left: 0rem;
            right: 0rem;
            display: flex;
            min-height: 6.4rem;
            border-top: .2rem solid var(--color-primary-100);
            background: var(--color-white);
            max-width: 48rem;
            margin: 0 auto;
          }

          .nav-secondary {
            z-index: -1;
            position absolute;
            bottom: 6.4rem;
            left: 0;
            right: 0;
            padding: 0 0.8rem;
            display: flex;
            height: 4.8rem;
            visibility: visible;
            opacity: 1;
            transition: opacity 0.32s;
          }

          .nav-secondary-hidden {
            visibility: hidden;
            opacity: 0;
          }

          @media(min-width: 768px) {
            nav {
              padding: 0 0.8rem;
            }

            .nav-secondary {
              margin: 0 0.8rem;
            }
          }

     `}
			</style>
		</>
	)
}
