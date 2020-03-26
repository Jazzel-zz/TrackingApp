import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';


const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(AuthContext)



    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthForm
                headerText='Sign In for Tracker'
                errorMessage={state.errorMessage}
                submitButtonText='Sign In'
                onSubmit={signin}
            />
            <NavLink
                text="Don't have an account? Sign up instead"
                routeName='Signup'
            />
        </View>
    );
}

SigninScreen.navigationOptions = {
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

export default SigninScreen;