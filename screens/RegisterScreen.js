import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imageURL, setImageUrL] = useState('');

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                
                const user = userCredential.user;

                user.updateProfile({
                    displayName: name,
                    photoURL: imageURL ? imageURL : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
                }).then(function () {
                    // Update successful.
                }).catch(function (error) {
                    // An error happened.
                });

                navigation.popToTop();
            })
            .catch((error) => {
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter your name"
                label="Name"
                leftIcon={{ type: 'material', name: 'badge' }}
                value={name}
                onChangeText={text => setName(text)}
            />
            <Input
                placeholder="Enter your email"
                label="Email"
                leftIcon={{ type: 'material', name: 'email' }}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder="Enter your password"
                label="password"
                leftIcon={{ type: 'material', name: 'lock' }}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Input
                placeholder="Enter your image Url"
                label="Profile Picture"
                leftIcon={{ type: 'material', name: 'face' }}
                value={imageURL}
                onChangeText={text => setImageUrL(text)}
            />

            <Button onPress={register} title="Register" style={styles.button} />
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
