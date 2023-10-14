import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List, Button, Subheading } from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header';
import Body from '../components/Body';

const Projetos = () => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  return (
    <Container>
      <Header title="TaskBook" />
      <Body>
        <Button icon="" mode="contained" onPress={() => console.log('Pressed')}>
          Usuário
        </Button>
        <Subheading>Resumo_</Subheading>
        <List.Section>
          <List.Accordion
            title="Projetos"
            left={(props) => <List.Icon {...props} icon="folder" />}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Em andamento"
            left={(props) => <List.Icon {...props} icon="calendar-clock" />}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Finalizados"
            left={(props) => <List.Icon {...props} icon="check-circle-outline" />}>
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </Body>
    </Container>
  );
};
export default Projetos;
