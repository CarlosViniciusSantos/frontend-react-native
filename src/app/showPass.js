import { View, Text, TextInput, StyleSheet, Pressable } from "react-native"
import { Image } from "expo-image"
import Button from "../components/Button"
import { useLocalSearchParams, useRouter } from "expo-router"
import { useAccountStore } from "../stores/useAccountStore"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


export default function ShowPass() {

    const router = useRouter()
    const {id} = useLocalSearchParams()
    const { accounts, deleteAccount } = useAccountStore()

    const account = accounts.find((item) => item.id === +id)

    const handleDelete = async () => {
        const response = await fetch(`http://localhost:3000/account/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(response.ok){
            const data = await response.json()
            console.log(data)
            deleteAccount(+id)
            router.back()
            return
        }
        console.log('Erro ao carregar accounts')
        return
    }
    return (
        <View style={styles.card}>
            <Image
                style={styles.logo}
                source={account?.logo_image}
            />

            <View style={styles.content}>
                <View style={styles.center}>
                <Text style={styles.service}>{account?.service}</Text>
                <Text style={styles.username}>{account?.username}</Text>
                </View>
                <TextInput style={styles.input} value={account?.pass || ''} />
                <Button>Copiar Senha</Button>
                <Button onPress={() => router.push({pathname: '/update', params:{id}})}>
                    <FontAwesome6 name="edit" size={17} color="white" />
                    EDITAR
                </Button>
                <Button onPress={handleDelete}>
                    <FontAwesome6 name="trash" size={17} color="white" />
                    EXCLUIR
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        gap: 15,
    },
    logo: {
        width: "100%",
        height: 240,
        borderBottomWidth:5
    },
    content: {
        gap: 8,
        padding:10
    },
    service: {
        fontSize: 25,
        fontWeight:'bold'
    },
    username: {
        color: '#BBBBBB',
        fontSize:22,
        fontWeight:'bold'
    },
    input:{
        padding:5,
        borderWidth:0.5,
        borderRadius:6
    },
    center:{
        alignItems:'center',
        gap:15
    }
})