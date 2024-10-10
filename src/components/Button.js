import { Pressable, Text, StyleSheet } from "react-native"

export default function Button({ onPress, children }) {
    return (
        <Pressable
            style={styles.button}
            onPress={onPress} >
            <Text style={styles.textCad}>{children}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: ({ pressed }) => [{
        backgroundColor: pressed ? 'black' : '#2f0636',
        alignItems: "center",
        marginVertical: 3,
        borderRadius: 10,
        paddingVertical: 5
    }],
    textCad:{
        color:'white'
    }
})