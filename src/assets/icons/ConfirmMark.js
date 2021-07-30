import PropTypes from 'prop-types'
import * as React from "react"
import Svg, { Path } from "react-native-svg"


export const ConfirmMark = (props) => {
	return (
		<Svg
			width={props.width}
			height={props.height}
			viewBox="0 0 16 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<Path
				d="M5.334 12L0 6.75l1.524-1.5 3.811 3.748-.001.001L14.476 0 16 1.5l-9.143 9L5.335 12 5.334 12z"
				fill={props.fillColor}
			/>
		</Svg>
	)
}


ConfirmMark.propsTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	fillColor: PropTypes.string
}

ConfirmMark.defaultProps = {
	width: 16,
	height: 12,
	fillColor: '#000000'
}
