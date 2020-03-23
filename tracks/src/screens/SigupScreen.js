import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spaces';


const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Input
                autoCapitalize="none"
                autoCorrect={false}
                label='Email'
                value={email} onChangeText={setEmail}
            />
            <Spacer />
            <Input
                autoCapitalize="none"
                autoCorrect={false}
                label='Password'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Spacer>
                <Button title='Sign Up' />
            </Spacer>

        </View>
    );
}

// !!! 15 - 12

SignupScreen.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 50,
        backgroundColor: 'white',
    }
});

export default SignupScreen;