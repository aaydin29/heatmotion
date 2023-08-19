import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import MapView, {Marker} from 'react-native-maps';

import colors from '../../styles/colors';

const Home = () => {
  const userInfo = useSelector(state => state.userInfo);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.lightGray} barStyle={'dark-content'} />
      <View style={styles.header_container}>
        <Image
          style={styles.app_logo_image}
          source={require('../../assets/images/AppLogo.png')}
        />
        <Text style={styles.app_name}>HeatMotion</Text>
        {userInfo?.userPhoto ? (
          <Image
            style={styles.profile_image}
            source={{uri: userInfo?.userPhoto}}
          />
        ) : (
          <Image
            style={styles.profile_image}
            source={require('../../assets/images/UserPhoto.png')}
          />
        )}
      </View>
      <MapView style={styles.mapview} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header_container: {
    width: '100%',
    height: 70,
    backgroundColor: colors.lightGray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  app_logo_image: {
    width: 40,
    height: 40,
    marginRight: 5,
  },
  app_name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: colors.black,
  },
  profile_image: {
    width: 40,
    height: 40,
    position: 'absolute',
    borderRadius: 20,
    resizeMode: 'contain',
    right: 30,
    borderWidth: 1,
  },
  mapview: {
    flex: 1,
  },
});
