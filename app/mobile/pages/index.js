import {useContext, useEffect} from 'react'
import Router from 'next/router'
import {Spinner} from '../components'
import {AuthCtx} from './_app'

/*
 * Splash page when opening app 
 */

export default () => { 
	const {user} = useContext(AuthCtx) 

	useEffect(() => {
		if(user) Router.replace('/dashboard')
		if(!user) Router.replace('/auth/signin')
	}, [])

	return <Spinner/> 
}
