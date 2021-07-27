import PropTypes from 'prop-types'
import React from 'react'
import { Text, View } from 'react-native'
import { Link } from 'react-router-native'
import { styles } from './stylesSignUpAdditionalBlock'


export const SignUpAdditionalBlock = (props) => {
	return (
		<View style={[styles.additionBlock, props.style]}>
			<Text style={styles.additionText}>Already have an account?</Text>
			<Link to='/login' underlayColor='none'>
				<Text style={[styles.additionText, styles.additionLink]}>Sign in</Text>
			</Link>
		</View>
	)
}


SignUpAdditionalBlock.propsTypes = {
	style: PropTypes.object
}
