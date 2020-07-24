import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {RiClipboardLine, RiDashboardLine, RiContactsBook2Line} from 'react-icons/ri'
import {useLoading} from '../hooks'
import {Spinner} from '.'

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
            border: 1px solid var(--color-white);
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
            border: 1px solid var(--color-primary-100);
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


export default ({ children }) => {
	const [scrollY, setScrollY] = useState(0)
	const handleScroll = () => setScrollY(window.pageYOffset)

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	}, [])
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
            bottom: 1.6rem;
            left: 1.6rem;
            right: 1.6rem;
            display: flex;
            margin: -1.6rem;
            margin-top: auto;
            min-height: 6.4rem;
            border-top: 1px solid var(--color-primary-100);
            background: var(--color-white);
          }

          .nav-secondary {
            z-index: -1;
            position absolute;
            top: -6.4rem;
            left: 0;
            right: 0;
            padding: 1.6rem;
            display: flex;
            height: 8rem;
            visibility: visible;
            opacity: 1;
            transition: opacity 0.32s;
            background: linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
          }

          .nav-secondary-hidden {
            visibility: hidden;
            opacity: 0;
          }
     `}
			</style>
		</>
	)
}
