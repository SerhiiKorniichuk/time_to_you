import React from 'react'
import { TextInput, View } from 'react-native'
import { useFormik } from 'formik'
import { styles } from './stylesLoginForm'
import { MainButton } from '../../../components/Buttons/MainButton/MainButton'

const Login = () => {
	const formik = useFormik({
		initialValues: {
			phone: '',
			password: '',
		},
		onSubmit: data => console.log(data),
	})
	const { values, handleChange, handleBlur, handleSubmit } = formik

	return (
		<>
			<View>
				<TextInput
					onChangeText={handleChange('phone')}
					onBlur={handleBlur('phone')}
					value={values.phone}
				/>
			</View>
		</>
	)
}

export default Login
