import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../../styles/colors';

const AuthInput = ({
  placeholder,
  maxLength,
  keyboardType,
  secureTextEntry,
  value,
  onChangeText,
  icon,
  iconTwo,
  iconTwoOnPress,
}) => {
  const styles = StyleSheet.create({
    container: {
      width: '80%',
      height: 50,
      backgroundColor: colors.lightGray,
      borderRadius: 5,
      elevation: 3,
      margin: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon_container: {
      height: '100%',
      width: '15%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: iconTwo ? '70%' : '80%',
      height: '100%',
      fontFamily: 'Poppins-Regular',
      fontSize: 15,
    },
    iconTwo_container: {
      height: '100%',
      width: '15%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      {icon && <View style={styles.icon_container}>{icon}</View>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        maxLength={maxLength}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={colors.inputTextGray}
      />
      {iconTwo && (
        <TouchableOpacity
          onPress={iconTwoOnPress}
          activeOpacity={0.7}
          style={styles.iconTwo_container}>
          {iconTwo}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AuthInput;
