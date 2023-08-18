import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import colors from '../../../styles/colors';
import Loading from '../Loading/Loading';

const AuthButton = ({text, onPress}) => {
  const buttonLoading = useSelector(state => state.buttonLoading);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      {buttonLoading ? <Loading /> : <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 45,
    borderRadius: 5,
    backgroundColor: colors.green,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
});
