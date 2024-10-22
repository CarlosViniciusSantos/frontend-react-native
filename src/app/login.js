import { StyleSheet, ScrollView, View, Text } from 'react-native';
import Footer from '../components/Footer'
import Button from '../components/Button';
import { useRouter } from 'expo-router';

export default function Init() {

  const router = useRouter()
  
  return (

    <ScrollView style={styles.container}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
      }}>
        <Text style={{ fontSize: 30, marginVertical:30}}>Login</Text>

        <Button onPress={() => router.push('/signup')}>Cadastre-se</Button>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})