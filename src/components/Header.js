import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from 'expo-image'
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation, Link } from 'expo-router';

export default function Header() {
  const navigation = useNavigation()
  return (
    <View style={styles.header}>
      <View style={styles.user} >
        <Image
          style={styles.avatar}
          source={require('../../assets/avatar-hidan.jpg')}
        />
        <Text style={styles.name}> Carlos Vinicius</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('signup')}>
        <Entypo style={styles.menu} name="plus" size={30} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2f0636',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 35,
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