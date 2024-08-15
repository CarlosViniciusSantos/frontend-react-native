import { View, Text, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.content}>
            <Text>Content</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 4,
        backgroundColor: '#85495e',
        justifyContent: 'center',
        alignItems: 'center'
    }
})