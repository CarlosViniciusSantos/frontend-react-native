import { View, Text, StyleSheet } from "react-native";

export default function Footer(){
    return(
        <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        flex: 1,
        backgroundColor: '#7267c9',
        justifyContent: 'center',
        alignItems: 'center'
      }
})