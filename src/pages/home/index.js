

// Projeto baseado no https://www.youtube.com/watch?v=0_54kPbEwfU&ab_channel=ErikPerviou, 





import React, { useState } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
} from 'react-native';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../services/firebaseConnections';
export default function Home () {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    async function createUser() {
        await createUserWithEmailAndPassword(auth, email, password)
        .then(value => {
            console.log('Cadastro realizado com sucesso! \n' + value.user.uid); 
        })
        .catch(error => console.log(error));
    };

    async function login() {
        await signInWithEmailAndPassword(auth, email, password)
        .then(value => {
            console.log('Login realizado com sucesso!') 
        })
        .catch(error => console.log(error));
    };

    async function logout() {
        await signOut(auth)
        .then(() => {
            console.log('Logout realizado com sucesso!')
        })
        .catch(error => console.log(error))
    };
    
    return (
        <View style={styles.conteiner}>
            <Text>Firebase App</Text>
            <TextInput
                placeholder="email"
                placeholderTextColor="#313131"
                value={email}
                onChangeText={value => setEmail(value)}
                style={styles.input}
            />
            <TextInput
                placeholder="senha"
                placeholderTextColor="#313131"
                value={password}
                onChangeText={value => setPassword(value)}
                style={[styles.input, {marginBottom: 10}]}
            />
            <Button
                title="CADASTRA"
                onPress={() => createUser()}	
            />
            <Button
                title="Logar"
                onPress={() => login()}	
            />
            <Button
                title="logOut"
                onPress={() => logout()}	
            />
        </View>
    )
};

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#313131',
        marginTop: 5,
        width: '80%',
        height: 50,
    }
})