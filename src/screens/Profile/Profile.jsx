import React, { useState } from 'react'
import { Alert, Image, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { ArrowLeftOutline } from '../../assets/icons/ArrowLeftOutline'
import { LogOutCircle } from '../../assets/icons/LogOutCircle'
import { MainButton } from '../../components/Buttons/MainButton/MainButton'
import { HeaderWithNavigation } from '../../components/HeaderWithNavigation/HeaderWithNavigation'
import { Input } from '../../components/Input/Input'
import { PhoneInput } from '../../components/PhoneInput/PhoneInput'
import { Select } from '../../components/Select/Select'
import { verticalScale } from 'react-native-size-matters'
import { styles as stylesInput } from '../../components/Input/stylesInput'
import { styles } from './stylesProfile'


export const Profile = () => {

	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [gender, setGender] = useState('female')
	const [language, setLanguage] = useState('english')

	return (
		<SafeAreaView style={styles.container}>
			<HeaderWithNavigation
				title='Profile settings'
				noBorder
				LeftButtonIcon={ArrowLeftOutline}
				leftButtonIconProps={{fillColor: '#323131'}}
				onPressLeftButton={() => Alert.alert('go back')}
			/>
			<ScrollView contentContainerStyle={{flexGrow: 1}}>
				<View style={styles.userPreviewContainer}>
					<Image
						style={styles.avatar}
						source={{}}
					/>
				</View>
				<View style={styles.buttonBlock}>
					<MainButton
						containerStyle={styles.editButton}
						textStyle={styles.editButtonText}
						type='primary'
						text='Edit'
						onPress={() => {Alert.alert('edit')}}
					/>
				</View>
				<View style={styles.formBlock}>
					<Input
						label='Name'
						value={name}
						onChange={setName}
					/>
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
						onChange={() => {}}
					/>
					<Select
						label='Language'
						value={language}
						list={[
							{ label: 'English', value: 'english' },
							{ label: 'Ukrainian', value: 'ukrainian' }
						]}
						setValue={setLanguage}
					/>
					<View style={stylesInput.container}>
						<Text style={stylesInput.label}>Password</Text>
					</View>
				</View>
				<View style={styles.footerButtonsGroup}>
					<View style={styles.passwordButtonContainer}>
						<MainButton
							type='primary'
							text='Change Password'
							onPress={() => {Alert.alert('change password')}}
						/>
					</View>
					<View style={styles.logOutButtonContainer}>
						<MainButton
							containerStyle={styles.logOutButton}
							type='outline'
							text='Log out'
							LeftIcon={LogOutCircle}
							leftIconContainerStyle={{paddingBottom: verticalScale(3)}}
							leftIconProps={{
								fillColor: '#FE6F61',
								width: verticalScale(25),
								height: verticalScale(25)
							}}
							onPress={() => {Alert.alert('log out')}}
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
