import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Screens/Login';
import Splash from './Screens/Splash';
import Home from './Screens/Home';
import { AuthProvider, useAuth } from './app/context/AuthContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Login"
    //     screenOptions={{ headerShown: true }}
    //   >
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Splash" component={Splash} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  );
}

const Layout = () => {
  const { authState, onLogout } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authState?.authenticated ? (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerRight: () => <Button onPress={onLogout} title="Logout" />,
            }}
          ></Stack.Screen>
        ) : (
          <Stack.Screen name="Login" component={Login}></Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
