import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Fonts from '../../styles/Fonts';

const Input = (props) => {
  return (
    <View style={styles.formControl}>
      <TextInput
        {...props}
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  formControl: {
    width: '100%'
  },
  input: {
    height: 50,
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderColor: '#21243d',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    marginTop: 10,
    paddingHorizontal: 10
  }
});
