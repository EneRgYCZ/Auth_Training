import React, {useState} from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const Input = ({ onTermChange, term, placeholder, secureTextEntry }) => {

    return(
        <View>

            <TextInput
                value = {term}
                autoCorrect = {false}
                autoComplete = {false}
                placeholder = { placeholder }
                onChangeText = {onTermChange}
                secureTextEntry = {secureTextEntry}
            />
        </View>
    );
}

const styles = StyleSheet.create ({

});

export default Input;