import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InquietudScreen from './InquietudScreen';
import RespuestaScreen from './RespuestaScreen/[preguntaId]';
import PreguntaId from './DetallesInquietudScreen/[preguntaId]';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Inquietud" component={InquietudScreen} />
      <Stack.Screen name="RespuestaScreen/[preguntaId]" component={RespuestaScreen} />
      <Stack.Screen name="DetallesInquietudScreen/[preguntaId]" component={PreguntaId} />
      {/* <Stack.Screen name="Perfil" component={PerfilScreen} /> */}
      {/* <Stack.Screen name="Cuenta" component={CuentaScreen} /> */}
      {/* <Stack.Screen name="Persona" component={PersonaScreen} /> */}
    </Stack.Navigator>
  );
}