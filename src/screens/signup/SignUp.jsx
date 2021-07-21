import React from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'

const SignUp = () => {
    return (
        <View>
            <Text>SignUp</Text>
            <Link to="/">
                <Text>Login</Text>
            </Link>
        </View>
    )
}

export default SignUp;
