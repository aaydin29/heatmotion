import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';

import colors from '../../styles/colors';
import AuthButton from '../../components/cards/Button/AuthButton';
import AuthInput from '../../components/cards/Input/AuthInput';
import {addUserInfo, changeButtonLoading} from '../../redux/reducers';
import authErrorMessages from '../../utils/authErrorMessages';
import {
  Birthday,
  Check,
  EyeClose,
  EyeOpen,
  Female,
  Key,
  Mail,
  Male,
  Phone,
  Username,
} from '../../components/Icons';

const Register = ({navigation}) => {
  const [initialFormValues, setInitialFormValues] = useState({
    username: '',
    birthday: '',
    phoneNumber: '',
    email: '',
    password: '',
    repassword: '',
    gender: 'Male',
  });
  const [keyVisible, setKeyVisible] = useState(true);
  const dispatch = useDispatch();

  function handleBackLogin() {
    navigation.navigate('Login');
  }

  function handleKeyVisible() {
    if (initialFormValues.password || initialFormValues.repassword) {
      setKeyVisible(false);

      setTimeout(() => {
        setKeyVisible(true);
      }, 2500);
    }
  }

  function handleBirthday(text, setFieldValue) {
    // It allows the Birthday to be written in dd/mm/yyyy format.
    const numbersOnly = text.replace(/\D/g, '');
    let formattedDate = '';
    if (numbersOnly.length > 0) {
      formattedDate += numbersOnly.substring(0, 2);
      if (numbersOnly.length >= 3) {
        formattedDate += '/' + numbersOnly.substring(2, 4);
        if (numbersOnly.length >= 5) {
          formattedDate += '/' + numbersOnly.substring(4, 8);
        }
      }
    }
    setFieldValue('birthday', formattedDate);
    setInitialFormValues({...initialFormValues, birthday: formattedDate});
  }

  async function handleRegister() {
    dispatch(changeButtonLoading(true));
    const {
      username,
      birthday,
      phoneNumber,
      email,
      password,
      repassword,
      gender,
    } = initialFormValues;
    if (password !== repassword) {
      showMessage({
        message: 'Passwords do not match!',
        type: 'danger',
        floating: true,
      });
      dispatch(changeButtonLoading(false));
      return;
    }
    if (
      !(username && phoneNumber && birthday && email && password && repassword)
    ) {
      showMessage({
        message: 'Please fill in all fields!',
        type: 'danger',
        floating: true,
      });
      dispatch(changeButtonLoading(false));
      return;
    }
    try {
      // Registration function.
      await auth().createUserWithEmailAndPassword(email, repassword);
      dispatch(
        addUserInfo({
          name: username,
          birthday: birthday,
          phoneNumber: phoneNumber,
          email: email,
          gender: gender,
          password: password,
        }),
      );
      showMessage({
        message: 'Account created successfully.',
        type: 'success',
        floating: true,
      });
      dispatch(changeButtonLoading(false));
      navigation.navigate('Login');
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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.top_container}>
        <Image
          style={styles.app_logo}
          source={require('../../assets/images/AppLogo.png')}
        />
        <Text style={styles.app_name}>HeatMotion</Text>
      </View>
      <View style={styles.bottom_container}>
        <Formik initialValues={initialFormValues} onSubmit={handleRegister}>
          {({handleSubmit, setFieldValue}) => (
            <>
              <AuthInput
                placeholder={'Full Name'}
                icon={<Username />}
                value={initialFormValues.username}
                onChangeText={text =>
                  setInitialFormValues({
                    ...initialFormValues,
                    username: text,
                  })
                }
              />
              <AuthInput
                placeholder={'Birthday dd/mm/yy'}
                icon={<Birthday />}
                value={initialFormValues.birthday}
                onChangeText={text => handleBirthday(text, setFieldValue)}
                maxLength={10}
                keyboardType="numeric"
              />
              <AuthInput
                placeholder={'Phone Number'}
                icon={<Phone />}
                keyboardType="numeric"
                maxLength={15}
                value={initialFormValues.phoneNumber}
                onChangeText={text =>
                  setInitialFormValues({
                    ...initialFormValues,
                    phoneNumber: text,
                  })
                }
              />
              <AuthInput
                placeholder={'Email'}
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
                placeholder={'Password'}
                value={initialFormValues.password}
                onChangeText={text =>
                  setInitialFormValues({
                    ...initialFormValues,
                    password: text,
                  })
                }
                icon={<Key />}
                iconTwo={keyVisible ? <EyeClose /> : <EyeOpen />}
                iconTwoOnPress={handleKeyVisible}
                secureTextEntry={keyVisible ? true : false}
              />
              <AuthInput
                placeholder={'Confirm Password'}
                value={initialFormValues.repassword}
                onChangeText={text =>
                  setInitialFormValues({
                    ...initialFormValues,
                    repassword: text,
                  })
                }
                icon={<Key />}
                iconTwo={keyVisible ? <EyeClose /> : <EyeOpen />}
                iconTwoOnPress={handleKeyVisible}
                secureTextEntry={keyVisible ? true : false}
              />
              <View style={styles.gender_container}>
                <TouchableOpacity
                  style={styles.male_button_container}
                  onPress={() =>
                    setInitialFormValues({...initialFormValues, gender: 'Male'})
                  }
                  activeOpacity={0.7}>
                  {initialFormValues.gender === 'Male' && (
                    <View style={styles.checkBox}>
                      <Check />
                    </View>
                  )}
                  <Male />
                  <Text style={styles.gender_text}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.female_button_container}
                  onPress={() =>
                    setInitialFormValues({
                      ...initialFormValues,
                      gender: 'Female',
                    })
                  }
                  activeOpacity={0.7}>
                  {initialFormValues.gender === 'Female' && (
                    <View style={styles.checkBox}>
                      <Check />
                    </View>
                  )}
                  <Female />
                  <Text style={styles.gender_text}>Female</Text>
                </TouchableOpacity>
              </View>
              <AuthButton text={'Register'} onPress={handleSubmit} />
            </>
          )}
        </Formik>
        <Text style={styles.backLogin_text}>
          Already have an account? {''}
          <Text style={styles.backLogin_title} onPress={handleBackLogin}>
            Login
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top_container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 20,
  },
  app_logo: {
    width: 70,
    height: 70,
  },
  app_name: {
    fontSize: 26,
    color: colors.black,
    fontFamily: 'Poppins-Medium',
  },
  bottom_container: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
  },
  gender_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    margin: 10,
  },
  male_button_container: {
    width: '45%',
    height: 45,
    borderRadius: 5,
    backgroundColor: colors.lightGray,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  female_button_container: {
    width: '45%',
    height: 45,
    borderRadius: 5,
    backgroundColor: colors.lightGray,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  gender_text: {
    marginLeft: 15,
    color: colors.inputTextGray,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  checkBox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    backgroundColor: colors.oceanBlue,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: -7.5,
    elevation: 2,
  },
  backLogin_text: {
    fontFamily: 'Poppins-Regular',
    margin: 10,
    marginTop: 10,
    color: colors.inputTextGray,
  },
  backLogin_title: {
    fontSize: 16,
    color: colors.blue,
    fontFamily: 'Poppins-Medium',
  },
});
