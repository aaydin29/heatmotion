import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import colors from '../../styles/colors';
import AuthInput from '../../components/cards/Input/AuthInput';
import {EyeClose, EyeOpen, Key, Mail} from '../../components/Icons';
import AuthButton from '../../components/cards/Button/AuthButton';
import {changeButtonLoading} from '../../redux/reducers';
import authErrorMessages from '../../utils/authErrorMessages';

const Login = ({navigation}) => {
  const [initialFormValues, setInitialFormValues] = useState({
    email: '',
    password: '',
  });
  const [keyVisible, setKeyVisible] = useState(true);
  const dispatch = useDispatch();

  function handleCreate() {
    navigation.navigate('Register');
  }

  function handleKeyVisible() {
    if (initialFormValues.password) {
      setKeyVisible(false);

      setTimeout(() => {
        setKeyVisible(true);
      }, 2500);
    }
  }

  async function handleLogin() {
    dispatch(changeButtonLoading(true));
    try {
      //Login function.
      await auth().signInWithEmailAndPassword(
        initialFormValues.email,
        initialFormValues.password,
      );
      showMessage({
        message: 'Login successful!',
        type: 'success',
        floating: true,
      });
      dispatch(changeButtonLoading(false));
      navigation.navigate('BottomPages');
      setInitialFormValues({email: '', password: ''});
    } catch (error) {
      showMessage({
        message: authErrorMessages(error.code),
        type: 'danger',
        floating: true,
      });
      dispatch(changeButtonLoading(false));
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.top_info_container}>
        <Image
          style={styles.app_logo}
          source={require('../../assets/images/AppLogo.png')}
        />
        <Text style={styles.app_name}>HeatMotion</Text>
      </View>
      <View style={styles.bottom_info_container}>
        <Formik initialValues={initialFormValues} onSubmit={handleLogin}>
          {({handleSubmit}) => (
            <>
              <AuthInput
                placeholder="Email"
                icon={<Mail />}
                value={initialFormValues.email}
                onChangeText={text =>
                  setInitialFormValues({
                    ...initialFormValues,
                    email: text,
                  })
                }
              />
              <AuthInput
                value={initialFormValues.password}
                onChangeText={text =>
                  setInitialFormValues({
                    ...initialFormValues,
                    password: text,
                  })
                }
                placeholder="Password"
                secureTextEntry={keyVisible ? true : false}
                icon={<Key />}
                iconTwo={keyVisible ? <EyeClose /> : <EyeOpen />}
                iconTwoOnPress={handleKeyVisible}
              />
              <AuthButton text={'Login'} onPress={handleSubmit} />
            </>
          )}
        </Formik>
        <Text style={styles.create_text}>
          You don't have an account? {''}
          <Text style={styles.create_title} onPress={handleCreate}>
            Create
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  top_info_container: {
    width: '100%',
    height: '45%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  app_logo: {
    width: '60%',
    height: '70%',
  },
  app_name: {
    fontSize: 26,
    color: colors.black,
    fontFamily: 'Poppins-Medium',
  },
  bottom_info_container: {
    width: '100%',
    height: '55%',
    alignItems: 'center',
    paddingTop: 20,
  },
  create_text: {
    fontFamily: 'Poppins-Regular',
    margin: 10,
    marginTop: 10,
    color: colors.inputTextGray,
  },
  create_title: {
    fontSize: 16,
    color: colors.blue,
    fontFamily: 'Poppins-Medium',
  },
});
