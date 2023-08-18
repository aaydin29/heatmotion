import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import colors from '../../styles/colors';
import AuthInput from '../../components/cards/Input/AuthInput';
import {
  Birthday,
  EyeClose,
  EyeOpen,
  Key,
  Mail,
  Phone,
  Username,
} from '../../components/Icons';
import AuthButton from '../../components/cards/Button/AuthButton';

const Register = ({navigation}) => {
  const [keyVisible, setKeyVisible] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordTwo, setPasswordTwo] = useState('');

  function handleBackLogin() {
    navigation.navigate('Login');
  }

  function handleKeyVisible() {
    setKeyVisible(false);

    setTimeout(() => {
      setKeyVisible(true);
    }, 2500);
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
        <AuthInput placeholder={'Full Name'} icon={<Username />} />
        <AuthInput placeholder={'Birthday'} icon={<Birthday />} />
        <AuthInput placeholder={'Phone Number'} icon={<Phone />} />
        <AuthInput placeholder={'Email'} icon={<Mail />} />
        <AuthInput
          placeholder={'Password'}
          value={password}
          onChangeText={text => setPassword(text)}
          icon={<Key />}
          iconTwo={keyVisible ? <EyeClose /> : <EyeOpen />}
          iconTwoOnPress={password ? handleKeyVisible : null}
          secureTextEntry={keyVisible ? true : false}
        />
        <AuthInput
          placeholder={'Confirm Password'}
          value={passwordTwo}
          onChangeText={text => setPasswordTwo(text)}
          icon={<Key />}
          iconTwo={keyVisible ? <EyeClose /> : <EyeOpen />}
          iconTwoOnPress={passwordTwo ? handleKeyVisible : null}
          secureTextEntry={keyVisible ? true : false}
        />
        <AuthButton text={'Register'} />
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
