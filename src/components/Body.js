import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Subheading } from 'react-native-paper';

const Body = ({children}) => {
  return (
    <View style={styles.body}> {children}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    margin: 15,
  },
});
export default Body;
