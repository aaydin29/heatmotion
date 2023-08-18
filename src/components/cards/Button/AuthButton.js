import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../../styles/colors';

const AuthButton = ({text, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.text}>{text}</Text>
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
    margin: 105,
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
