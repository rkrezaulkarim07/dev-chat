import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imageURl, setImageUrl] = useState('');
    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter your name"
                label="Name"
                leftIcon={{ type: 'material', name: 'badge' }}
                value={name}
                onChange={text => setName(text)}
            />
            <Input
                placeholder="Enter your email"
                label="Email"
                leftIcon={{ type: 'material', name: 'email' }}
                value={email}
                onChange={text => setEmail(text)}
            />
            <Input
                placeholder="Enter your password"
                label="password"
                leftIcon={{ type: 'material', name: 'lock' }}
                value={password}
                onChange={text => setPassword(text)}
                secureTextEntry
            />
            <Input
                placeholder="Enter your image Url"
                label="Profile Picture"
                leftIcon={{ type: 'material', name: 'face' }}
                value={imageURl}
                onChange={text => setImageUrl(text)}
            />
            
            <Button class="registerButton" title="Register" style={styles.button} />
        </View>
    )
}

export default RegisterScreen 

const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,
        
        
    },

    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
})
