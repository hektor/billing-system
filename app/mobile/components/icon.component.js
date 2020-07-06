export default ({ name, animation, hover, infinite, fill, size }) => {
	return (
		<i
			data-eva={name}
			data-eva-animation={animation}
			data-eva-hover={hover}
			data-eva-infinite={infinite}
			data-eva-fill={fill}
			data-eva-width={size}
			data-eva-height={size}
		/>
	)
}
