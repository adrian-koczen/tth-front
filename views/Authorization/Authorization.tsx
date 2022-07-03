import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
  Text,
} from 'react-native';
// Components
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';

import Email from 'assets/icons/email.svg';
import {useFormik} from 'formik';
import {colors} from 'styles/global';

const EmailIcon = <Email width={20} height={20} color={colors.gray} />;

const initialFormValues = {
  email: 'email',
  password: 'password',
};

const Authorization = () => {
  const formik = useFormik({
    initialValues: initialFormValues,
    onSubmit: values => {
      console.log('siema');
    },
  });

  const closeKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={closeKeyboard}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>TryThis</Text>
          <Text style={[styles.headerText, styles.textSecondPart]}>
            Hardware
          </Text>
        </View>
        <Input
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          icon={EmailIcon}>
          {formik.values.email}
        </Input>
        <Input
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          hiddenText={true}
          icon={EmailIcon}>
          {formik.values.password}
        </Input>
        <Button>LOGIN</Button>
        <View style={styles.passwordRecovery}>
          <Text style={styles.text}>Forgot password?</Text>
          <Text style={[styles.text, styles.recoveryButton]}>Recover here</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  headerText: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
    marginBottom: 16,
  },
  text: {
    fontFamily: 'Lato-Regular',
  },
  textSecondPart: {
    color: colors.green,
  },
  passwordRecovery: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginVertical: 5,
  },
  recoveryButton: {
    color: colors.green,
    marginLeft: 5,
  },
});

export default Authorization;
