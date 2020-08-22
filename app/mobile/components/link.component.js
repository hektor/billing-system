import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

export default ({children, href}) => {
	const child = React.Children.only(children)

	/*
   * Check if endpoint matches one of the matchRoutes prop
   * 1. Remove whitespace
   * 2. Create array of hrefs
   * 3. Check if at least one route in array matches
   */
	const checkRoutes = () =>
		href
			.replace(/\s/g, '')
			.split(',')
			.some(route => route === `/${Router.pathname.split('/')[1]}`)

	let className = child.props.className || ''
	if (checkRoutes()) className = `${className} active`.trim()

	return (
		<Link href={href.trim().split(',')[0]}>
			{React.cloneElement(child, {className})}
		</Link>
	)
}
