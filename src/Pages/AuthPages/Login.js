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

const Login = ({navigation}) => {
  const [keyVisible, setKeyVisible] = useState(true);
  const [password, setPassword] = useState('');

  function handleCreate() {
    navigation.navigate('Register');
  }

  function handleKeyVisible() {
    setKeyVisible(false);

    setTimeout(() => {
      setKeyVisible(true);
    }, 2500);
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
        <AuthInput placeholder="Email" icon={<Mail />} />
        <AuthInput
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          secureTextEntry={keyVisible ? true : false}
          icon={<Key />}
          iconTwo={keyVisible ? <EyeClose /> : <EyeOpen />}
          iconTwoOnPress={password ? handleKeyVisible : null}
        />
        <AuthButton text={'Login'} />
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
