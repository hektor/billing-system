import {useState, useEffect} from 'react'
import {Layout} from '.'

/*
 * Splash screen higher order component
 */

export default ({Component, ...rest}) => {
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		try {
			/*
       * TODO: Replace with authentication check
       */
			setTimeout(() => setLoading(false), 1500)
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}, [])
	return loading ?
		(
			<Layout>
				<h1>Loading</h1>
				<style jsx>
					{`
      h1 {
        margin: auto;
      }
    `}
				</style>
			</Layout>
		)
		: 
		<Component {...rest} />
}
