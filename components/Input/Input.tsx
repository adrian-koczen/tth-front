import React from 'react';
import {TextInput, StyleSheet, View, SafeAreaView} from 'react-native';

interface Props {
  children: string;
  icon?: React.ReactElement;
  onChangeText: (string: string) => void;
  onBlur: (e: any) => void;
}

const Input = ({children, icon, onChangeText, onBlur}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <TextInput
        style={styles.input}
        value={children}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  input: {
    borderColor: '#637383',
    borderBottomWidth: 2,
    paddingLeft: 30,
  },
  icon: {
    position: 'absolute',
    top: 15,
    left: 5,
  },
});

export default Input;
