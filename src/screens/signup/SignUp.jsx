import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'

const SignUp = () => {
    return (
        <View>
            <Text>SignUp</Text>
            <Link to="/login">
                <Text>Login</Text>
            </Link>
            <Link to="/">
                <Text>splashScreen</Text>
            </Link>
        </View>
    )
}

export default SignUp;
