import React, {useState} from 'react';
import {TextInput, StyleSheet, View, SafeAreaView, Text} from 'react-native';
import {colors} from 'styles/global';

interface Props {
  children: string;
  icon: React.ReactElement;
  onChangeText: (string: string) => void;
  onBlur: (e: any) => void;
  hiddenText?: boolean;
  errors: string | undefined;
  placeholder: string;
}

const Input = ({
  children,
  icon,
  hiddenText,
  errors,
  placeholder,
  onChangeText,
  onBlur,
}: Props) => {
  const [isActive, setActive] = useState(false);

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginVertical: 5,
    },
    input: {
      borderColor: '#637383',
      borderBottomWidth: 2,
      paddingLeft: 30,
      borderBottomColor: isActive ? colors.green : colors.gray,
      fontFamily: 'Lato-Bold',
    },
    icon: {
      position: 'absolute',
      top: 15,
      left: 5,
    },
    error: {
      marginTop: 6,
      color: colors.red,
    },
  });

  const onBlurUpdate = (e: any) => {
    onBlur(e);
    setActive(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <TextInput
        onFocus={() => setActive(true)}
        style={styles.input}
        value={children}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlurUpdate}
        secureTextEntry={hiddenText ? true : false}
      />
      {errors && <Text style={styles.error}>{errors}</Text>}
    </SafeAreaView>
  );
};

export default Input;
