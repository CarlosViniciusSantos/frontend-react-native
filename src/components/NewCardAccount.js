import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from 'expo-image'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useNavigation } from "expo-router";

export default function NewCardAccount({ id, service, userName,pass, imgUrl, accounts, setAccounts }) {
    const navigation = useNavigation()

    const handleDelete = async () => {
        const response = await fetch(`http://localhost:3000/account/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            const newAccounts = accounts.filter((item) => item.id !== id)
            setAccounts(newAccounts)
            return
        }
        console.log('Erro ao deletar conta')
        return
    }

    return (
        <View style={styles.card}>
            <Pressable onPress={() => navigation.navigate('showPass', {imgUrl, pass, service, userName}) }>
                <Image
                    style={styles.logo}
                    source={imgUrl}
                />
            </Pressable>

            <View style={styles.content}>
                <Text style={styles.service}>{service}</Text>
                <Text style={styles.username}>{userName}</Text>
                <Pressable onPress={handleDelete} style={styles.del}>
                    <FontAwesome6 name="trash" size={17} color="white" />
                    <Text style={styles.txtdel}>EXCLUIR</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderStyle: 'solid',
        borderColor: '#EEEEEE',
        borderWidth: 1,
        borderRadius: 30
    },
    logo: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    content: {
        gap: 15,
        alignItems: 'center'
    },
    service: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    username: {
        color: 'white',
        fontSize: 15
    },
    del: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: 'red',
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 10,
        gap: 5
    },
    txtdel: {
        fontWeight: 'bold',
        color: 'white'
    }
})