import React from 'react'
import {StyleSheet, View} from 'react-native'
import {Title, TextInput, Button} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';


import Header from '../components/Header'
import Body from '../components/Body'
import Container from '../components/Container'

const Register = () => {
  const navigation = useNavigation();

  const [nome, setNome] = React.useState("Hugo");
  const [email, setEmail] = React.useState("hugo@teste");
  const [senha, setSenha] = React.useState("1234");

  return (
    <Container>
      <Header title='TaskBook'/>
      <Body>
        <View style={styles.space}>
        </View>
        <Title style={styles.titulo}>Faça seu registro:</Title>
        <View style={styles.space}>
        </View>
        <TextInput
          label="Nome"
          value={nome}
          onChangeText={text => setNome(text)}/>
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
           <Button icon="" mode="contained" onPress={() => console.log('Pressed')}>
            Concluir
          </Button>
          <Button icon="" mode="outlined" onPress={() => navigation.navigate('Login')}>
            Voltar
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

export default Register