import PropTypes from 'prop-types'
import React from 'react'
import Svg, { Path } from 'react-native-svg'


export const ArrowLeftOutline = (props) => {
	return (
		<Svg
			width={props.width}
			height={props.height}
			viewBox='0 0 8 14'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M7.645 11.496L2.93 6.782l4.714-4.714a1.21 1.21 0 000-1.713 1.21 1.21 0 00-1.713 0L.355 5.932a1.21 1.21 0 000 1.713l5.577 5.576a1.21 1.21 0 001.713 0c.461-.474.473-1.251 0-1.725z'
				fill={props.fillColor}
			/>
		</Svg>
	)
}


ArrowLeftOutline.propsTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	fillColor: PropTypes.string
}

ArrowLeftOutline.defaultProps = {
	width: 8,
	height: 14,
	fillColor: '#000000'
}
