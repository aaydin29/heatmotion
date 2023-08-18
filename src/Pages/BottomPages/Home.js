import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import colors from '../../styles/colors';

const Home = () => {
  return (
    <View>
      <StatusBar backgroundColor={colors.lightGray} barStyle={'dark-content'} />
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
