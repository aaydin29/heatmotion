import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

import colors from '../../styles/colors';
import {
  Edit,
  Female,
  Logout,
  Mail,
  Male,
  Phone,
  Plus,
} from '../../components/Icons';
import {addUserInfo} from '../../redux/reducers';
import EditProfileModal from '../../components/modal/EditProfileModal';

const Profile = ({navigation}) => {
  const userInfo = useSelector(state => state.userInfo);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [userAge, setUserAge] = useState('');
  const dispatch = useDispatch();

  async function handleLogout() {
    await auth().signOut();
    navigation.navigate('AuthPages');
  }

  function handleEditProfile() {
    setEditModalVisible(true);
  }

  useEffect(() => {
    const birthdayParts = userInfo.birthday.split('/');
    const birthDay = parseInt(birthdayParts[0], 10);
    const birthMonth = parseInt(birthdayParts[1], 10);
    const birthYear = parseInt(birthdayParts[2], 10);

    const today = new Date();

    const age =
      today.getFullYear() -
      birthYear -
      (today.getMonth() < birthMonth ||
      (today.getMonth() === birthMonth && today.getDate() < birthDay)
        ? 1
        : 0);
    setUserAge(age);
  }, [userInfo]);

  function handleAddPhoto() {
    const options = {
      title: 'Titlee',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel || response.errorCode) {
        showMessage({
          message: 'Something went wrong.',
          type: 'warning',
          floating: true,
        });
      } else {
        const path = response.assets[0].uri;
        dispatch(
          addUserInfo({
            ...userInfo,
            userPhoto: path,
          }),
        );
      }
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.lightGray} barStyle={'dark-content'} />
      <View style={styles.top_container}>
        <Text style={styles.title_text}>Profile</Text>
        <TouchableOpacity
          style={styles.user_photo_container}
          activeOpacity={0.8}
          onPress={handleAddPhoto}>
          {userInfo?.userPhoto ? (
            <Image
              style={styles.user_photo}
              source={{uri: userInfo?.userPhoto}}
            />
          ) : (
            <Image
              style={styles.user_photo}
              source={require('../../assets/images/UserPhoto.png')}
            />
          )}
          {!userInfo?.userPhoto && (
            <View style={styles.plus_container}>
              <Plus />
            </View>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.bottom_container}>
        <View style={styles.name_age_container}>
          <Text style={styles.name_age_text}>
            {userInfo?.name}, {userAge}
          </Text>
        </View>
        <View style={styles.infos_containers}>
          <View style={styles.infos_text_containers}>
            <Text style={styles.infos_containers_title}>
              {userInfo?.phoneNumber}
            </Text>
            <Text style={styles.infos_containers_text}>Phone Number</Text>
          </View>
          <Phone />
        </View>
        <View style={styles.infos_containers}>
          <View style={styles.infos_text_containers}>
            <Text style={styles.infos_containers_title}>{userInfo?.email}</Text>
            <Text style={styles.infos_containers_text}>Email adress</Text>
          </View>
          <Mail />
        </View>
        <View style={styles.infos_containers}>
          <View style={styles.infos_text_containers}>
            <Text style={styles.infos_containers_title}>
              {userInfo?.gender}
            </Text>
            <Text style={styles.infos_containers_text}>Gender</Text>
          </View>
          {userInfo?.gender === 'Male' ? <Male /> : <Female />}
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity
            style={styles.button_info_container}
            activeOpacity={0.7}
            onPress={handleEditProfile}>
            <Text style={styles.button_text}>Edit Profile</Text>
            <Edit />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logout_info_container}
            activeOpacity={0.7}
            onPress={handleLogout}>
            <Text style={styles.button_text}>Logout</Text>
            <Logout />
          </TouchableOpacity>
        </View>
      </View>
      <EditProfileModal
        isVisible={editModalVisible}
        onPressClose={() => setEditModalVisible(false)}
        onClose={() => setEditModalVisible(false)}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  top_container: {
    width: '100%',
    height: '25%',
    backgroundColor: colors.lightGray,
    alignItems: 'center',
  },
  title_text: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.black,
    fontSize: 22,
    marginTop: 25,
  },
  user_photo_container: {
    position: 'absolute',
    bottom: -40,
  },
  user_photo: {
    width: 130,
    height: 130,
    borderRadius: 65,
    resizeMode: 'contain',
  },
  plus_container: {
    width: 30,
    height: 30,
    borderWidth: 1.5,
    borderColor: colors.white,
    borderRadius: 15,
    backgroundColor: '#C7C7C7',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    right: 3,
  },
  bottom_container: {
    width: '100%',
    height: '70%',
  },
  name_age_container: {
    paddingTop: 65,
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: colors.gray,
  },
  name_age_text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: colors.black,
  },
  infos_containers: {
    borderBottomWidth: 2,
    borderColor: colors.gray,
    backgroundColor: colors.lightGray,
    height: 75,
    paddingRight: 30,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infos_text_containers: {
    marginTop: 2,
  },
  infos_containers_title: {
    fontFamily: 'Poppins-Medium',
    color: colors.black,
    fontSize: 16,
  },
  infos_containers_text: {
    fontFamily: 'Poppins-Regular',
  },
  logout_text: {
    fontFamily: 'Poppins-Medium',
    color: colors.black,
    fontSize: 16,
  },
  button_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.lightGray,
    height: 75,
  },
  button_info_container: {
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.gray,
    width: '50%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 25,
    paddingLeft: 20,
  },
  logout_info_container: {
    borderBottomWidth: 2,
    borderColor: colors.gray,
    width: '50%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 30,
    paddingLeft: 20,
  },
  button_text: {
    fontFamily: 'Poppins-Medium',
    color: colors.black,
    fontSize: 16,
  },
});
