import { useRouter } from 'next/router'
import Link from 'next/link'
import {  GoClippy, GoDashboard, GoOrganization } from 'react-icons/go'


export default () => {
	const router = useRouter()
	const tabs = [
		{href: '/logs', title: 'Logs', icon: <GoClippy />},
		{ href: '/dashboard', title: 'Dashboard', icon: <GoDashboard/>},
		{ href: '/clients', title: 'Clients', icon: <GoOrganization/>},
	]
  
	return (
		<>
			<nav>
				{tabs.map(({href, title, icon, className}, i) => (
					<Link href={href} key={i}>
						<a className={`${className} ${`/${router.pathname.split('/')[1]}` === href && 'active'}`}>
							{icon}
							<span className={router.basePath === href && 'active-title'}>{title}</span>
						</a>
					</Link>
				))}
			</nav>
			<style jsx>
				{`
        a {
          display: flex;
          align-items: center;
        }

        a > :global(.icon) {
          height: 2.4rem;
          width: 2.4rem;
        }

        nav > .active {
          color: var(--color-primary-700);
          transform: translateY(-0.8rem);
          opacity: 1;
        }

        nav {
          display: flex;
          margin: -1.6rem;
          padding: 1.6rem 0.8rem;
          margin-top: auto;
          background: var(--color-primary-100);
          border-radius: 3.2rem 3.2rem 0 0;
        }

        nav > a {
          flex: 1;
          text-align: center;
          flex-direction: column;
          padding: 0;
          opacity: 0.5;
          transform: translateY(0);
        }

        nav > a > span {
          margin-top: 0.4rem;
        }

     `}
			</style>
		</>
	)
}
