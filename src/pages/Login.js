import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Title, TextInput, Button} from 'react-native-paper'

import { useNavigation } from '@react-navigation/native';
import {useUser} from '../context/UserContext';

import Header from '../components/Header'
import Body from '../components/Body'
import Container from '../components/Container'

const Login = () => {
  const navigation = useNavigation();
  const {setSigned} = useUser()

  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  return (
    <Container>
      <Header title='TaskBook'/>
      <Body>
        <View style={styles.space}>
        </View>
        <Title style={styles.titulo}>Login</Title>
        <View style={styles.space}>
        </View>
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}/>
          <View style={styles.space}>
          </View>
          <TextInput
          label="Senha"
          secureTextEntry
          value={senha}
          onChangeText={text => setSenha(text)}/>
          <View style={styles.space}>
          </View>
           <Button icon="" mode="contained" onPress={() => setSigned(true)}>
            Entrar
          </Button>
           <Button uppercase={false} mode="text" onPress={() => console.log('Pressed')}>
    Esqueci minha senha
  </Button> 
  <Button style={{marginTop: 100, width: 150, alignSelf: 'center'}} uppercase={false} mode="outlined" onPress={() => navigation.navigate('Register')}>
    Registrar-se
  </Button>
      </Body>
    </Container>
  )
}

const styles = StyleSheet.create({
  space: {
    height: 30
  },
  titulo: {
    margin: 0
  },
})

export default Login