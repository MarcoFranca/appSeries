import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import FormRow from '../components/FormRow'
export default class LoginPage extends React.Component{
    constructor(props) {
        super(props);

        this.state ={
            email:'',
            password:'',
        }
    }

render() {
    return(
        <View>
            <FormRow>
                <TextInput
                    placeholder="user@email.com"
                    style={styles.input}
                />
            </FormRow>
            <FormRow>
                <TextInput
                    placeholder="********"
                    style={styles.input}
                    secureTextEntry={true}
                />
            </FormRow>
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
