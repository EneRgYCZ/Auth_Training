import React, {useState} from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import Input from './common/Input';

import firebase from 'firebase';

const TextField = () => {

    console.log(password);

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const onButtonPress = () => {
        
        firebase.auth().createUserWithEmailAndPassword(email, password);

        //Si ar mai trebui sa fac un try and catch cu un toast da cine are timp...

    };

    return(
        <View style={styles.Field}>

            <Input
                term = {email}
                placeholder = {'Email'}
                onTermChange = {setEmail}
            />

            <Input
                term = {password}
                secureTextEntry = {true}
                placeholder = {'Password'}
                onTermChange = {setPassword}
            />

        <TouchableOpacity
            onPress = {onButtonPress}
        >
            Login
        </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create ({
    Field : {
        borderColor : 'blue',
        borderWidth : 3,
        paddingHorizontal : 5
    }
});

export default TextField;