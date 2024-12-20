import { useState } from "react"
import { View, Text, TextInput, StyleSheet, Alert } from "react-native"
import Button from "../components/Button"
import { useRouter } from "expo-router"

export default function signUp() {

    const router = useRouter()

    const [txtName, setTxtName] = useState('')
    const [txtEmail, setTxtEmail] = useState('')
    const [txtAvatar, setTxtAvatar] = useState('')
    const [txtPass, setTxtPass] = useState('')

    const handlerCreateAccount = async () => {
        const user = {
            name: txtName,
            email: txtEmail,
            avatar: txtAvatar,
            pass: txtPass
        }

        const response = await fetch('http://localhost:3000/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        if (response.ok) {
            const data = await response.json()
            Alert.alert('Usuário Criado com Sucesso')
            setTxtName('')
            setTxtEmail('')
            setTxtAvatar('')
            setTxtPass('')
            router.back()
            return
        }else{
            const data = await response.json()
            Alert.alert('Erro ao criar usuário')
            console.log(data?.error)
        }
        return

    }

    return (
        <View style={styles.container}>
            <Text>Name:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setTxtName}
                value={txtName}
                placeholder='Digite seu nome...'
                placeholderTextColor='gray'
            />
            <Text>Email:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setTxtEmail}
                value={txtEmail}
            />
            <Text>Avatar Url:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setTxtAvatar}
                value={txtAvatar}
                keyboardType='url'
            />
            <Text>Password:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setTxtPass}
                value={txtPass}
                keyboardType="visible-password"
                secureTextEntry={true}
            />
            <Button onPress={handlerCreateAccount}>
                Cadastrar
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    input: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#444444',
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginVertical: 5,
        borderRadius: 7
    },
    button: ({ pressed }) => [{
        backgroundColor: pressed ? 'black' : '#2f0636',
        alignItems: "center",
        marginVertical: 10,
        borderRadius: 10,
        paddingVertical: 5
    }],
})