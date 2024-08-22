import { View, Text, StyleSheet } from "react-native";
import { Image } from 'expo-image'

export default function NewCardAccount({service, userName, imgUrl}){
    return(
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
    )
}

const styles = StyleSheet.create({
    card:{
        borderStyle: 'solid',
        borderColor:'#EEEEEE',
        borderWidth: 1, 
        borderRadius:30
    },
    logo:{
        width:'100%',
        height:150,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
    },
    content:{
        gap:15,
        alignItems:'center'
    },
    service:{
        fontSize: 25,
        fontWeight:'bold'
    },
    username:{
        color: 'white',
        fontSize:15
    }
})