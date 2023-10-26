import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { useAuth } from '../app/context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { onRegister, onLogin } = useAuth();

  const login = async () => {
    const result = await onLogin!(email, password);
    if (result && result.error) {
      alert(result.msg);
      console.log(email, password);
    }
  };

  const register = async () => {
    const result = await onRegister!(email, password);
    if (result && result.error) {
      alert(result.msg);
    } else {
      login();
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Email</Text>
        <TextInput
          placeholder="Enter Email"
          onChangeText={(text: string) => setEmail(text)}
          value={email}
        ></TextInput>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Password</Text>
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
          onChangeText={(text: string) => setPassword(text)}
          value={password}
        ></TextInput>
      </View>
      <View style={{ gap: 10 }}>
        <Button onPress={login} title="Login" />
        <Button onPress={register} title="Create account" />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
