import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {colors, typography} from 'styles/global';
import {useFormik} from 'formik';
import KeyboardDismiss from 'services/KeyboardDismiss';
import * as Yup from 'yup';
import CustomButton from 'components/Button/CustomButton';
import HTTPInstance from 'services/AxiosInstance';
import {connect} from 'react-redux';
import {completeEmailVerified} from 'redux/slices/authorization';

const FormValidationSchema = Yup.object().shape({
  verifyCode: Yup.number().max(999999),
});

const FormInitialValue = {
  verifyCode: '',
};

interface Props {
  username: string;
  setEmailVerified?: any;
  dispatch?: any;
}

const EmailVerify = ({username, dispatch}: Props) => {
  const formik = useFormik({
    initialValues: FormInitialValue,
    validationSchema: FormValidationSchema,
    onSubmit: () => {
      formik.resetForm();
      emailVerifyRequest();
    },
  });

  const emailVerifyRequest = async () => {
    try {
      await HTTPInstance.post('/user/emailVerify', {
        username: username,
        verifyCode: Number(formik.values.verifyCode),
      });
      dispatch && dispatch(completeEmailVerified(false));
    } catch (error: any) {
      const errorMessage = error.response.data;
      console.log(errorMessage);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={KeyboardDismiss}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.h1}>EMAIL VERIFY</Text>
          <Text style={styles.h2}>
            Please check your email inbox, and enter here your verify code.
          </Text>
        </View>
        <View style={styles.verifyCodeContainer}>
          <TextInput
            style={styles.input}
            value={formik.values.verifyCode}
            onChangeText={formik.handleChange('verifyCode')}
            keyboardType="numeric"
            maxLength={6}
            placeholder="000000"
          />
          <CustomButton onPress={formik.handleSubmit}>Submit</CustomButton>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    maxWidth: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  h1: {
    fontSize: typography.big,
    color: colors.green,
    fontWeight: '700',
  },
  h2: {
    fontSize: typography.small,
    textAlign: 'center',
    color: colors.gray,
  },
  verifyCodeContainer: {
    maxWidth: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  input: {
    letterSpacing: 10,
    width: 180,
    fontSize: typography.big,
  },
});

const mapDispatchToProps = (state: any) => ({
  username: state.authorization.emailVerify.username,
});

export default connect(mapDispatchToProps, null)(EmailVerify);
