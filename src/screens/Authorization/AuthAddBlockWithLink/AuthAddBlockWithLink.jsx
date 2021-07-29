import PropTypes from 'prop-types'
import React from 'react'
import { Text, View } from 'react-native'
import { Link } from 'react-router-native'
import { styles } from './stylesAuthAddBlockWithLink'


export const AuthAddBlockWithLink = ({mainText, linkText, link, style}) => {
	return (
		<View style={[styles.additionBlock, style]}>
			<Text style={styles.additionText}>{mainText}</Text>
			<Link to={link} underlayColor='none'>
				<Text style={[styles.additionText, styles.additionLink]}>{linkText}</Text>
			</Link>
		</View>
	)
}


AuthAddBlockWithLink.propsTypes = {
	mainText: PropTypes.string.isRequired,
	linkText: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	style: PropTypes.object
}
