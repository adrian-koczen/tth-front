import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  errors: {
    id: number;
    message: string;
  }[];
}

const SingleError = ({message}: {message: string}) => {
  return <Text style={styles.message}>{message}</Text>;
};

const Errors = ({errors}: Props) => {
  return (
    <View style={styles.container}>
      {errors &&
        errors.map(error => {
          return <SingleError key={error.id} message={error.message} />;
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 999,
    top: 0,
  },
  message: {
    color: 'red',
  },
});

export default Errors;
