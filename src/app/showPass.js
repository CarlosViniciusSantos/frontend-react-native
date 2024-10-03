import { View, Text, TextInput, StyleSheet } from "react-native"
import { Image } from "expo-image"
import Button from "../components/Button"
import { useNavigation, useLocalSearchParams } from "expo-router"

export default function ShowPass() {

    const {imgUrl, service, userName, pass} = useLocalSearchParams()

    return (
        <View style={styles.card}>
            <Image
                style={styles.logo}
                source={imgUrl}
            />

            <View style={styles.content}>
                <Text style={styles.service}>{service}</Text>
                <Text style={styles.username}>{userName}</Text>
            <TextInput value={pass}/>
            <Button>Copiar Senha</Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderStyle: 'solid',
        borderColor: '#EEEEEE',
        borderWidth: 1,
        flexDirection: 'row',
        gap: 15,
        borderRadius: 10

    },
    logo: {
        width: 133,
        height:133
    },
    content: {
        gap: 8
    },
    service: {
        fontSize: 17
    },
    username: {
        color: '#BBBBBB'
    }
})