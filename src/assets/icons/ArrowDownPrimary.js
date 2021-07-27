import PropTypes from 'prop-types'
import React from 'react'
import Svg, { Path } from 'react-native-svg'


export const ArrowDownPrimary = (props) => {
	return (
		<Svg
			width={props.width}
			height={props.height}
			viewBox='0 0 13 7'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path d='M6.5 7L12.13.25H.87L6.5 7z' fill={props.fillColor}/>
		</Svg>
	)
}


ArrowDownPrimary.propsTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	fillColor: PropTypes.string
}

ArrowDownPrimary.defaultProps = {
	width: 10,
	height: 10,
	fillColor: '#000000'
}
