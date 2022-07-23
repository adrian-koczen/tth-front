import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  errors: {
    id: number;
    message: string;
  }[];
}

const Errors = ({errors}: Props) => {
  return (
    <View style={styles.container}>
      {errors &&
        errors.map(error => {
          return <Text key={error.id}>{error.message}</Text>;
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
});

export default Errors;
