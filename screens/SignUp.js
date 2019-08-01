import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'react-native-firebase';

export default class SignUp extends React.Component {
  state = { email: '', password: '', displayName:'', errorMessage: null }
    handleSignUp = () => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(user => user.user.updateProfile({displayName: this.state.displayName}))
          .then(() => this.props.navigation.navigate('Home'))
          .catch(error => this.setState({ errorMessage: error.message }))
    }
    static navigationOptions = {
        title: 'SignUp',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
        <View style={styles.container}>
            <Text>Sign Up</Text>
            {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
                {this.state.errorMessage}
            </Text>}
            <TextInput
            placeholder="Display Name"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={displayName => this.setState({ displayName })}
            value={this.state.displayName}
            />
            <TextInput
            placeholder="Email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            />
            <TextInput
            secureTextEntry
            placeholder="Password"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            />
            <Button title="Sign Up" onPress={this.handleSignUp} />
            <Button
            title="Already have an account? Login"
            onPress={() => navigate('Login')}
            />
        </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})