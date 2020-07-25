import {RiLoader4Line} from 'react-icons/ri'

/*
 * Spinning loader icon 
 */

export default ({size}) => (
	<div>
		<RiLoader4Line size={size || 24}/>
		<style jsx>
			{`
      div {
        display: flex;
        animation: 0.8s cubic-bezier(0.5, 0.5, 0.5, 0.8) spin infinite;
        justify-content: center;
        align-items: center;
      }

      @keyframes spin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
   `}
		</style>
	</div>
)
