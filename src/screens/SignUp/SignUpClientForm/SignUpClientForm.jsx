import React, { useState } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { ArrowLeftOutline } from '../../../assets/icons/ArrowLeftOutline'
import { MainButton } from '../../../components/Buttons/MainButton/MainButton'
import { Input } from '../../../components/CustomInput/Input'
import { Select } from '../../../components/CustomSelect/Select'
import { PhoneInput } from '../../../components/PhoneInput/PhoneInput'
import { SignUpAdditionalBlock } from '../SignUpAdditionalBlock/SignUpAdditionalBlock'
import { styles } from './stylesSignUpClientForm'

export const SignUpClientForm = props => {
	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [password, setPassword] = useState('')
	const [gender, setGender] = useState('female')

	const goPreviewsStep = () => {
		props.changeSignUpStage('chooseType')
	}

	const onChange = () => {}

	const onSubmit = () => {}

	return (
		<>
			<View style={styles.headerBlock}>
				<TouchableWithoutFeedback onPress={goPreviewsStep}>
					<View style={styles.headerButton}>
						<ArrowLeftOutline
							width={styles.arrow.width}
							height={styles.arrow.height}
							fillColor='#545454'
						/>
					</View>
				</TouchableWithoutFeedback>
				<Text style={styles.headerTitle}>Sign up</Text>
			</View>
			<View style={styles.formBlock}>
				<Input label='Name' value={name} onChange={setName} />
				<Input
					label='Last name'
					value={lastName}
					onChange={setLastName}
				/>
				<Select
					label='Gender'
					value={gender}
					list={[
						{ label: 'Female', value: 'female' },
						{ label: 'Male', value: 'male' },
					]}
					setValue={setGender}
				/>
				<PhoneInput
					label='Phone number'
					countryCode='DK'
					callingCode='45'
					onChange={onChange}
				/>
				<Input
					label='Create password'
					value={password}
					type='password'
					onChange={setPassword}
				/>
			</View>
			<View style={styles.buttonGroup}>
				<MainButton type='primary' text='Continue' onPress={onSubmit} />
			</View>
			<SignUpAdditionalBlock />
		</>
	)
}
