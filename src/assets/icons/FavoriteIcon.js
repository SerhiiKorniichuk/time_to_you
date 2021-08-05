import PropTypes from 'prop-types'
import React from "react"
import Svg, { Path } from "react-native-svg"


export const FavoriteIcon = (props) => {
	return (
		<Svg
			width={props.width}
			height={props.width}
			viewBox="0 0 22 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M15.583.42A5.334 5.334 0 0011 3.17 5.334 5.334 0 006.417.42 5.667 5.667 0 001 6.295c0 3.79 3.988 7.927 7.333 10.733a4.145 4.145 0 005.334 0C17.012 14.222 21 10.084 21 6.295A5.666 5.666 0 0015.583.42zm-2.987 15.333a2.477 2.477 0 01-3.192 0c-4.281-3.592-6.737-7.039-6.737-9.458a4 4 0 013.75-4.208 4 4 0 013.75 4.208.833.833 0 101.666 0 4 4 0 013.75-4.208 4 4 0 013.75 4.208c0 2.42-2.455 5.866-6.737 9.455v.003z"
				fill={props.fillColor}
			/>
		</Svg>
	)
}


FavoriteIcon.propsTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	fillColor: PropTypes.string
}

FavoriteIcon.defaultProps = {
	width: 20,
	height: 20,
	fillColor: '#000000'
}
