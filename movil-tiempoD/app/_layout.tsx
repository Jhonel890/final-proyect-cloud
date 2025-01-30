import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack>
            {/* <Stack.Screen name="IndexScreen" options={{ title: "Inicio" }} /> */}
            {/* <Stack.Screen name="CuentaScreen" options={{ title: "Cuenta" }} />
            <Stack.Screen name="PersonaScreen" options={{ title: "Persona" }} /> */}
            <Stack.Screen name="InquietudScreen" options={{ title: "Inquietud" }} />
            <Stack.Screen name="RespuestaScreen/[preguntaId]" options={{ title: "Respuesta" }} />
            <Stack.Screen name="DetallesInquietudScreen/[preguntaId]" options={{ title: "DetallesInquietud" }} />
            {/* <Stack.Screen name="PerfilScreen" options={{ title: "Perfil" }} /> */}
        </Stack>
    );
}
