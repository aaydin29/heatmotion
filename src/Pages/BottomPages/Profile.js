import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';

const Profile = () => {
  return (
    <View>
      <StatusBar backgroundColor={colors.lightGray} barStyle={'dark-content'} />
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
