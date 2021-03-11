import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

import firebase from 'firebase';

import TextField from './components/TextFields'

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');

    firebase.initializeApp({
        apiKey: 'AIzaSyABuW_iTRFLA5CM-akCGxbXfTL9Up4lNho',
        authDomain: 'auth-178ff.firebaseapp.com',
        projectId: 'auth-178ff',
        storageBucket: 'auth-178ff.appspot.com',
        messagingSenderId: '20652878630',
        appId: '1:20652878630:web:5d60c24b7f18c9b2e4efe7',
        measurementId: 'G-RCV1K2Y4GQ'
        });

    return (
        <View>
            <TextField/>
        </View> 
    );
};

const styles = StyleSheet.create ({

    textStyle: {
        alignSelf : 'center',
        color : '#007aff',
        fontSize : 16,
        fontWeight : '600',
        paddingTop : 10,
        paddingBottom : 100
    },

    buttonStyle: {
        flex : 1,
        alignSelf : 'stretch',
        backgroundColor : '#fff',
        borderRadius : 5,
        borderWidth : 1,
        borderColor : '#005aff',
        marginLeft : 5,
        marginRight : 5,
    }

});

export default Login;