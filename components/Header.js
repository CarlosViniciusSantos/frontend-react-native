import { View, Text, StyleSheet } from "react-native";
import { Image } from 'expo-image'
import Entypo from '@expo/vector-icons/Entypo';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.user} >
        <Image
          style={styles.avatar}
          source="https://i.pinimg.com/236x/45/80/91/458091fec21537d40eb19a0cf21c4f8a.jpg"
        />
        <Text style={styles.name}> Carlos Vinicius</Text>
      </View>
      <Entypo style={styles.menu} name="menu" size={30} color="white" />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#2f0636',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  name: {
    fontWeight: '600',
    fontSize: 18,
    color: 'white'
  },
  menu: {
    padding: 10
  }
})