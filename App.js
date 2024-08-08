import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

export default function App() {
  return (
    <View style={styles.container}>
        <Header/>
        <Content/>
        <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})