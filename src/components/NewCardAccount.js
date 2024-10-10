import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from 'expo-image'
import { useRouter } from "expo-router";

export default function NewCardAccount({ id, service, userName, pass, imgUrl, accounts, setAccounts }) {

    const router = useRouter()

    return (
        <Pressable onPress={() => router.push({pathname: '/showPass',params: { id }})}>
            <View style={styles.card}>
                <Image
                    style={styles.logo}
                    source={imgUrl}
                />

                <View style={styles.content}>
                    <Text style={styles.service}>{service}</Text>
                    <Text style={styles.username}>{userName}</Text>

                </View>
            </View>
        </Pressable>
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