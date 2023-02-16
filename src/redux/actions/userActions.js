import firebase from "firebase/compat";
import {Alert} from "react-native";

export const USER_LOGIN = "USER_LOGIN"
const userLogin = user =>({
    type:USER_LOGIN,
    user
})
export const USER_LOGOUT = "USER_LOGOUT"
const userLogout = ()=>({
    type: USER_LOGOUT,
})

export const tryLogin = () =>{
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user)=>{
            this.setState({message:'Sucesso'})
            console.log('Usuario autenticado!',user)
        })
        .catch(error=> {
            if (error.code === 'auth/user-not-found'){
                Alert.alert('Usuario não encontrado',
                    'Gostaria de fazer um cadastro com as informações inseridas?',
                    [
                        {
                            text:'não',
                            style:'cancel'
                        },
                        {
                            text:'sim',
                            onPress:()=>{
                                firebase
                                    .auth()
                                    .createUserWithEmailAndPassword(email,password)
                                    .then(user => {
                                        this.setState({message: 'Sucesso'})
                                        console.log('Usuario criado!', user)
                                    })
                                    .catch(error=>{
                                        console.log('usuario não cadastrado',error)
                                        this.setState({message: this.getMessageErrorCode(error.code)})
                                    })
                            }
                        }
                    ],
                    {cancelable: false}
                )
            }
            console.log('usuario não autenticado',error)
            this.setState({message: this.getMessageErrorCode(error.code)})
        })
    this.setState({isLoading:false})
}
