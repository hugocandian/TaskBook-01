import React from 'react';
import {View, StyleSheet} from 'react-native'
import { Button, Searchbar} from 'react-native-paper';

import Container from '../components/Container'
import Header from '../components/Header'
import Body from '../components/Body'

const Projetos = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return(
    <Container>
      <Header title='TaskBook' />
      
      <Body>
      <Searchbar
      placeholder="Procurar"
      onChangeText={onChangeSearch}
      value={searchQuery}
      />
      <View style={styles.homeButtons}>
        <Button style={styles.botao} icon= "plus" mode="contained" onPress={() => console.log('Pressed')}>
          Criar projeto
        </Button>
        <Button style={styles.botao} icon="file-download" mode="contained" onPress={() => console.log('Pressed')}>
          Gerar relatório
        </Button>
        <Button  style={styles.botao} icon="account-group" mode="contained" onPress={() => console.log('Pressed')}>
          Gerir colaboradores
        </Button>
        </View>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  homeButtons: {
    flex: 1,
  },
  botao: {
  }
})

export default Projetos;