
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { login } from '../../services/login';

export const Home = ({navigation}) => {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  
  const [pst, setPst] = useState(true)

  console.log({email, pass})

  const handleLogin = async() => {
    const user = await login(email, pass)
    navigation.navigate('Profile', {user: user})
  }

  return (
    <View style={styles.container}>
      <Text>HOME PAGE</Text>
      <TextInput 
        placeholder='email' 
        style={styles.inp}
        value={email}
        onChangeText={value => setEmail(value)}
      />
      <TextInput 
        placeholder='password' 
        style={styles.inp}
        value={pass}
        onChangeText={value => setPass(value)}
        secureTextEntry={pst}
      />
        <Button
          title='Show'
          onPress={() => 
            setPst(!pst)
          }
        />
      <Button 
        title='Login'
        onPress={() => 
          handleLogin(email, pass)
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inp: {
    borderWidth: 1,
    borderRadius: 10,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    marginTop: 15,
    marginBottom: 15,
    width: '80%'
  }
});
