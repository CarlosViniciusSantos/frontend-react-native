import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, Pressable} from "react-native";
// import CardAccount from "./CardAccount";
import NewCardAccount from "./NewCardAccount";


export default function Content() {
    const [accounts, setAccounts] = useState([])
    const [txtServico, setTxtServico] = useState('')
    const [txtUsername, setTxtUsername] = useState('')
    const [txtPass, setTxtPass] = useState('')
    const [txtImgUrl, setTxtImgUrl] = useState('')

    useEffect(() => {
        const getAccounts = async () => {
            const response = await fetch('http://localhost:3000/account/list')
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setAccounts(data.accounts)
                return
            }
            console.log('Erro ao carregar accounts')
            return
        }

        getAccounts()
    }, [])

    const handlerCreateAccount =async () =>{
        const account = {
            service: txtServico,
            username: txtUsername,
            logo_image: txtImgUrl,
            pass: txtPass,
            user_id:1
        }

        const response = await fetch('http://localhost:3000/account',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(account)
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setAccounts([data.account,...accounts])
            return
        }
        console.log('Erro ao carregar accounts')
        return

    }
    return (
        <View style={styles.content}>

            <View>
                <Text>Serviço:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTxtServico}
                    value={txtServico}
                    placeholder='Digite o nome do serviço...'
                    placeholderTextColor='gray'
                />
                <Text>Username:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTxtUsername}
                    value={txtUsername}
                />
                <Text>Password:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTxtPass}
                    value={txtPass}
                />
                <Text>Url da Imagem:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTxtImgUrl}
                    value={txtImgUrl}
                    keyboardType='url'
                />
                <Pressable
                style={styles.button}
                onPress={handlerCreateAccount}          
                >
                    <Text style={styles.textCad}>Cadastrar</Text>
                </Pressable>
            </View>

            {accounts.length === 0 && <Text>Loading...</Text>}

            {
                accounts.map((account) =>
                    <NewCardAccount
                        key={account.id}
                        id={account.id}
                        service={account.service}
                        imgUrl={account.logo_image}
                        userName={account.username}
                        accounts={accounts}
                        setAccounts={setAccounts}
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#85495e',
        padding: 15,
        gap: 20
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    input:{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#444444',
        paddingHorizontal:10,
        paddingVertical:6,
        marginVertical:5,
        borderRadius:7
    },
    button: ({pressed}) => [{
        backgroundColor: pressed?'black': '#2f0636',
        alignItems:"center",
        marginVertical:10,
        borderRadius:10,
        paddingVertical:5
    }],
    textCad:{
        color:'white'
    }
})