import {RiArrowUpLine} from 'react-icons/ri'

export default () => (
	<button onClick={() => document.documentElement.scrollTop = 0}>
		<RiArrowUpLine/>
    Scroll to top
	</button>
)
