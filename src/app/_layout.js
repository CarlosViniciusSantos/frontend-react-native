import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: 'rgb(47, 6, 54)',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle:{
            backgroundColor:'rgb(133, 73, 94)'
        }
      }}>
      <Stack.Screen name="index" options={{title:"Bem Vindo(a)"}}/>
      <Stack.Screen name="home" options={{title:"Home", headerShown:false}}/>
      <Stack.Screen name="login" options={{title:"Entrar"}}/>
      <Stack.Screen name="signup" options={{title:"Cadastrar-se"}}/>
      <Stack.Screen name="create-account"  options={{title:"Cadastrar"}}/>
      <Stack.Screen name="showPass"  options={{title:"Ver Senha"}}/>
      <Stack.Screen name="update"  options={{title:"Atualizar"}}/>
    </Stack>
  );
}