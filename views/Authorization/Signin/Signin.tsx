import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet, Text} from 'react-native';
import * as Yup from 'yup';
// Axios
import HTTPInstance from 'services/AxiosInstance';
// Redux
import {AppDispatch} from 'redux/store/store';
import {connect} from 'react-redux';
import {setAuthorized} from 'redux/slices/authorization';
// Components
import Input from 'components/Input/Input';
import CustomButton from 'components/Button/CustomButton';
import {useFormik} from 'formik';
// Localstorage
import {useMMKVStorage} from 'react-native-mmkv-storage';
import {MMKV} from 'App';
// Styles
import {colors, typography} from 'styles/global';
// Icons
import Email from 'assets/icons/email.svg';
import Lock from 'assets/icons/lock.svg';
import KeyboardDismiss from 'services/KeyboardDismiss';
const EmailIcon = <Email width={20} height={20} color={colors.gray} />;
const LockIcon = <Lock width={20} height={20} color={colors.gray} />;

const initialFormValues = {
  email: '',
  password: '',
};

const formValidationSchema = Yup.object().shape({
  email: Yup.string().email('Please enter email').required('Field required'),
  password: Yup.string().required('Field required'),
});

interface Props {
  dispatch?: AppDispatch;
}

const AuthorizationView = ({dispatch}: Props) => {
  const [, setAuthToken] = useMMKVStorage<string>('auth-token', MMKV);

  const formik = useFormik({
    validationSchema: formValidationSchema,
    initialValues: initialFormValues,
    onSubmit: () => {
      formik.resetForm();
      loginRequest();
    },
  });

  const loginRequest = async () => {
    const body = {
      email: formik.values.email,
      password: formik.values.password,
    };
    try {
      const res = await HTTPInstance.post('auth/login', body);
      setAuthToken(res.data.access_token);
      dispatch && dispatch(setAuthorized(true));

      // Navigate to email verify view
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={KeyboardDismiss}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>TryThis</Text>
          <Text style={[styles.logoText, styles.logoTextSecondPart]}>
            Hardware
          </Text>
        </View>
        <Input
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          icon={EmailIcon}
          errors={formik.errors.email}
          placeholder="email">
          {formik.values.email}
        </Input>
        <Input
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          hiddenText={true}
          icon={LockIcon}
          errors={formik.errors.password}
          placeholder="password">
          {formik.values.password}
        </Input>
        <CustomButton onPress={formik.handleSubmit}>LOGIN</CustomButton>
        <View style={styles.optionContainer}>
          <Text style={styles.text}>Forgot password?</Text>
          <Text style={[styles.text, styles.textButton]}>Recover here</Text>
        </View>
        <View style={[styles.optionContainer, styles.absolute]}>
          <Text style={styles.text}>Don't have account?</Text>
          <Text style={[styles.text, styles.textButton]}>Signup here</Text>
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
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  logoText: {
    fontFamily: 'Lato-Bold',
    fontSize: typography.big,
    marginBottom: 16,
  },
  logoTextSecondPart: {
    color: colors.green,
  },
  text: {
    fontFamily: 'Lato-Regular',
    fontSize: typography.small,
  },
  textButton: {
    color: colors.green,
    marginLeft: 5,
  },
  optionContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginVertical: 5,
  },
  recoveryButton: {
    color: colors.green,
    marginLeft: 5,
  },
  absolute: {
    position: 'absolute',
    bottom: 20,
  },
});

export default connect(null, null)(AuthorizationView);
