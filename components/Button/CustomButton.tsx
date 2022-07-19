import React, {useState} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {colors} from 'styles/global';

interface Props {
  children: string;
  disable?: boolean;
  onPress: () => void;
}

const CustomButton = ({children, onPress}: Props) => {
  const [isPressed, setPressed] = useState(false);

  const changeColor = (value: boolean) => {
    setPressed(value);
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: isPressed ? '#29B1B1' : colors.green,
      width: '100%',
      padding: 10,
      display: 'flex',
      alignItems: 'center',
      marginVertical: 10,
      borderRadius: 15,
    },
    text: {
      color: '#ffffff',
      fontFamily: 'Lato-Bold',
    },
  });

  return (
    <Pressable
      onPress={() => onPress()}
      onPressIn={() => changeColor(true)}
      onPressOut={() => changeColor(false)}
      style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
