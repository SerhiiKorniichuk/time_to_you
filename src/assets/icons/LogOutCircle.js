import React from 'react'
import PropTypes from 'prop-types'
import Svg, { Path } from 'react-native-svg'


export const LogOutCircle = (props) => {
	return (
		<Svg
			width={props.width}
			height={props.height}
			viewBox='0 0 25 25'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<Path
				d='M2.083 12.5l5.209 4.167v-3.125h9.375v-2.083H7.292V8.334L2.083 12.5z'
				fill={props.fillColor}
			/>
			<Path
				d='M13.543 3.124a9.31 9.31 0 00-6.63 2.747l1.473 1.473a7.245 7.245 0 015.157-2.137c1.948 0 3.779.76 5.156 2.137a7.245 7.245 0 012.136 5.156c0 1.948-.759 3.78-2.136 5.156a7.245 7.245 0 01-5.156 2.137c-1.948 0-3.78-.76-5.157-2.137L6.914 19.13a9.31 9.31 0 006.629 2.747 9.31 9.31 0 006.629-2.747 9.311 9.311 0 002.747-6.629 9.31 9.31 0 00-2.747-6.63 9.31 9.31 0 00-6.63-2.746z'
				fill={props.fillColor}
			/>
		</Svg>
	)
}


LogOutCircle.propsTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	fillColor: PropTypes.string
}

LogOutCircle.defaultProps = {
	width: 25,
	height: 25,
	fillColor: '#000000'
}
