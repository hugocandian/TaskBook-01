import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import Projetos from '../pages/Projetos'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'projetos', title: 'Projetos', icon: 'file-chart' },
    { key: 'perfil', title: 'Perfil', icon: 'account-edit' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    projetos: Projetos,
    perfil: Perfil,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;