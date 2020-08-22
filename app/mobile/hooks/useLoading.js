import {useState} from 'react'

/*
 * Custom hook for getting & setting a loading state
 */

export default (initial) => {
	const [isLoading, setIsLoading] = useState(initial)

	const	load = () => setIsLoading(true)
	const done = () => setIsLoading(false)

	return { 
		load,
		done,
		isLoading,
		isDone: !isLoading
	}
}
