import React from "react";
import {Button, StyleSheet, TextInput, View} from "react-native";
import FormRow from '../components/FormRow'
export default class LoginPage extends React.Component{
    constructor(props) {
        super(props);

        this.state ={
            email:'',
            password:'',
        }
    }
    onChangeHandler(field, value) {
        this.setState({
            [field]:value
            })
    }
    tryLogin(){
        console.log(this.state)
    }

render() {
    return(
        <View>
            <FormRow>
                <TextInput
                    placeholder="user@email.com"
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={value => this.onChangeHandler('email', value)}
                />
            </FormRow>
            <FormRow>
                <TextInput
                    placeholder="********"
                    style={styles.input}
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={value=> this.onChangeHandler('password',value)}
                />
            </FormRow>
            <Button
                title='Entrar'
                onPress={()=> this.tryLogin()}
            />
        </View>
    )
}

}

const styles = StyleSheet.create({
    input:{
        paddingLeft:5,
        paddingRight:5,
        paddingBottom:10,
    }
})
