import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from "react-native";
// import CardAccount from "./CardAccount";
import NewCardAccount from "./NewCardAccount";


export default function Content() {
    const [accounts, setAccounts] = useState([])

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


    return (
        <View style={styles.content}>

            {accounts.length === 0 && <Text>Loading...</Text>}

            {
                accounts.map((account) =>
                    <NewCardAccount
                        key={account.id}
                        service={account.service}
                        imgUrl={account.logo_image}
                        userName={account.username}
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