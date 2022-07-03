import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Keyboard,
} from 'react-native';
import Input from 'components/Input/Input';
import Email from 'icons/email.svg';
import {useFormik} from 'formik';

const EmailIcon = <Email width={20} height={20} color={'#858585'} />;

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
        <Input
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          icon={EmailIcon}>
          {formik.values.email}
        </Input>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Authorization;
