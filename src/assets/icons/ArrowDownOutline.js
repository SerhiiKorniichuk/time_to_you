import PropTypes from 'prop-types'
import React from 'react'
import Svg, { Path } from 'react-native-svg'


export const ArrowDownOutline = (props) => {
	return (
		<Svg
			width={props.width}
			height={props.height}
			viewBox='0 0 14 8'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M7 7.713l6.01-6.01L11.597.288 7 4.888 2.404.288.99 1.702 7 7.713z'
				fill={props.fillColor}
			/>
		</Svg>
	)
}


ArrowDownOutline.propsTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	fillColor: PropTypes.string
}

ArrowDownOutline.defaultProps = {
	width: 14,
	height: 8,
	fillColor: '#000000'
}
