// CustomInput.js
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const CustomInput = ({ label = 'Digite algo', value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        label={label}
        value={value}
        onChangeText={onChangeText}
        mode="outlined"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
  },
  input: {
    marginBottom: 16,
  },
});

export default CustomInput;
