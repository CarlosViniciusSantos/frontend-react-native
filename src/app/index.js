import { StyleSheet, ScrollView, View, Text, ActivityIndicator } from 'react-native';
import {useEffect} from 'react'
import Footer from '../components/Footer'
import { useRouter } from 'expo-router';

export default function Init() {

  const router = useRouter()

  useEffect(() =>{
    setTimeout(() => router.replace('/login'), 4000)
  },[])
  
  return (

    <ScrollView style={styles.container}>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
      }}>
        <Text style={{ fontSize: 30, marginVertical:30 }}>MyPass</Text>
        <ActivityIndicator style={{marginVertical:30}} size="large" color="#00ff00" />
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})