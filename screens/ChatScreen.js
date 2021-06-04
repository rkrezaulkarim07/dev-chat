import React, { useLayoutEffect ,useState , useCallback,useEffect} from 'react'
import { View, Text, Touchable } from 'react-native'
import { auth } from '../firebase';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import {GiftedChat} from 'react-native-gifted-chat'

const ChatScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{
                    marginLeft: 20,
                }}>
                    <Avatar
                        rounded
                        source={{
                            uri: auth?.currentUser?.photoURL
                        }}
                    />
                </View>
            ),
            headerRight: () => (
                <TouchableOpacity style={{
                    marginRight: 30,
                }}
                    onPress={signOut}
                >
                    <AntDesign name="logout" size={24} color="black" />
                </TouchableOpacity>
            )
        })
    }, [])
    const signOut = () => {
        auth.signOut().then(() => {
            // Sign-out successful.
            navigation.replace('Login')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <View>
            <Text>Chat Screen</Text>
        </View>
    )
}

export default ChatScreen
