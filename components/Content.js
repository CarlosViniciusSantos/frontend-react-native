import { View, Text, StyleSheet } from "react-native";
// import CardAccount from "./CardAccount";
import NewCardAccount from "./NewCardAccount";



export default function Content() {
    const acocunts = [
        {
            id: 1,
            service: "Gmail",
            imgUrl: "https://static.vecteezy.com/system/resources/previews/022/484/516/original/google-mail-gmail-icon-logo-symbol-free-png.png",
            userName: "carlos.vinicius1@aluno.ifsp.edu.br"
        },
        {
            id: 2,
            service: "Instragram",
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png",
            userName: "c.ss_pv"
        },
        {
            id: 3,
            service: "GitHub",
            imgUrl: "https://as2.ftcdn.net/v2/jpg/02/50/30/59/1000_F_250305943_sDC6la1N1fDl3bLgfLxOkQwItIodsdMb.jpg",
            userName: "CarlosViniciusSantos"
        },
        {
            id: 4,
            service: "Facebook",
            imgUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/facebook-logo-design-template-14a38c75b25fe8a11e30a7202e6846cc_screen.jpg?ts=1616956224",
            userName: "Carlos Vinicius"
        }
    ]

    return (
        <View style={styles.content}>
            {
                acocunts.map((acocunt) =>
                    <NewCardAccount
                        key={acocunt.id}
                        service={acocunt.service}
                        imgUrl={acocunt.imgUrl}
                        userName={acocunt.userName}
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
    }
})