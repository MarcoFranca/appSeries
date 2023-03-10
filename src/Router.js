import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginPage from './pages/LoginPage';
import SeriesPage from "./pages/SeriesPage";


const AppNavigator = createStackNavigator({
        Login: {
            screen: LoginPage,
            navigationOptions:{
                title:'Bem Vindo!'
            }
        },
    Main:{
        screen: SeriesPage,
        navigationOptions:{
            title:'Series!'
        }
    }
    },{
        defaultNavigationOptions:{
            title:'Series!',
            headerTintColor:'#FFFFFF',
            headerStyle:{
                backgroundColor:"#6ca2f7",
                borderBottomWidth:1,
                borderBottomColor:'#C5C5C5',
            },
            headerTitleStyle:{
                color:'#FFFFFF',
                fontSize:30,
            },
        }
    }

);


const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;

