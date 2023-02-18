import firebase from "firebase/compat";

export const USER_LOGIN = "USER_LOGIN"
const userLogin = user =>({
    type:USER_LOGIN,
    user
})
export const USER_LOGOUT = "USER_LOGOUT"
const userLogout = ()=>({
    type: USER_LOGOUT,
})

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
    const userLoginSuccess = user => ({
        type: USER_LOGIN_SUCCESS,
        user
    })

export const tryLogin = ({email,password}) => (dispatch) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user =>{
            const action = userLoginSuccess(user.user)
            dispatch(action)
        })
    //     .catch(error=> {
    //         if (error.code === 'auth/user-not-found'){
    //             Alert.alert('Usuario não encontrado',
    //                 'Gostaria de fazer um cadastro com as informações inseridas?',
    //                 [
    //                     {
    //                         text:'não',
    //                         style:'cancel'
    //                     },
    //                     {
    //                         text:'sim',
    //                         onPress:()=>{
    //                             firebase
    //                                 .auth()
    //                                 .createUserWithEmailAndPassword(email,password)
    //                                 .then(user => {
    //                                     this.setState({message: 'Sucesso'})
    //                                     console.log('Usuario criado!', user)
    //                                 })
    //                                 .catch(error=>{
    //                                     console.log('usuario não cadastrado',error)
    //                                     this.setState({message: this.getMessageErrorCode(error.code)})
    //                                 })
    //                         }
    //                     }
    //                 ],
    //                 {cancelable: false}
    //             )
    //         }
    //         console.log('usuario não autenticado',error)
    //         this.setState({message: this.getMessageErrorCode(error.code)})
    //     })
    // this.setState({isLoading:false})
}
