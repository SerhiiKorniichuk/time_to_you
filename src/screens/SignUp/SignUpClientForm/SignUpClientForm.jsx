import React, { useState } from 'react'
import { View } from 'react-native'
import { MainButton } from '../../../components/Buttons/MainButton/MainButton'
import { Input } from '../../../components/Input/Input'
import { Select } from '../../../components/Select/Select'
import { PhoneInput } from '../../../components/PhoneInput/PhoneInput'
import { HeaderBlock } from '../../Authorization/HeaderBlock/HeaderBlock'
import { AddBlockWithActionText } from '../../Authorization/AddBlockWithActionText/AddBlockWithActionText'
import { styles as stylesAuthorization } from './../../Authorization/stylesAuthorization'
import { styles } from './stylesSignUpClientForm'


export const SignUpClientForm = (props) => {

	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [password, setPassword] = useState('')
	const [gender, setGender] = useState('female')

	const goPreviewsStep = () => props.changeSignUpStage('chooseType')

	const onChange = () => {}

	const onSubmit = () => {}

	return (
		<>
			<HeaderBlock title='SignUp' withButton onPress={goPreviewsStep} />
			<View style={stylesAuthorization.formBlock}>
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
						{ label: 'Male', value: 'male' }
					]}
					setValue={setGender}
				/>
				<PhoneInput
					label='Phone number'
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
				<MainButton type='primary' text='Continue' onPress={onSubmit}/>
			</View>
			<AddBlockWithActionText
				type='link'
				mainText='Already have an account?'
				actionText='Sign in'
				link='/auth/login'
			/>
		</>
	)
}
