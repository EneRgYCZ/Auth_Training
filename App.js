import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './src/screens/Login';

const navigator = createStackNavigator (
{
    Login : Login,
},  

{
  initialRouteName : 'Login',
  defaultNavigationOptions : {
    title : 'Login'
}
});

export default createAppContainer (navigator);