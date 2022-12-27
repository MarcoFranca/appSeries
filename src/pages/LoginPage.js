import React from "react";
import {Button, StyleSheet, TextInput, View} from "react-native";
import FormRow from '../components/FormRow'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat";
export default class LoginPage extends React.Component{
    constructor(props) {
        super(props);

        this.state ={
            email:'',
            password:'',
        }
    }

    componentDidMount() {

        const firebaseConfig = {
            apiKey: "AIzaSyDneAj7l515ogbcKBRZEe70B3Pr0wVgTi8",
            authDomain: "appseries-321ce.firebaseapp.com",
            projectId: "appseries-321ce",
            storageBucket: "appseries-321ce.appspot.com",
            messagingSenderId: "1055661963597",
            appId: "1:1055661963597:web:dcc7bc1b3af510de4f9f04",
            measurementId: "G-W1MZQK4PQ3"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);

        firebase.auth()
            .signInWithEmailAndPassword('teste@usuario.com', '123123')
            .then((user)=>{
                console.log('Usuario autenticado!',user)
            })
            .catch(error=> console.log('usuario não autenticado',error))
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
            <View style={styles.container}>
                <FormRow first>
                    <TextInput
                        placeholder="user@email.com"
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={value => this.onChangeHandler('email', value)}
                    />
                </FormRow>
                <FormRow last>
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
    container:{
        paddingLeft:10,
        paddingRight:10,
    },
    input:{
        paddingLeft:5,
        paddingRight:5,
        paddingBottom:10,
        backgroundColor:'transparent',
    },
    button:{

    }
})
