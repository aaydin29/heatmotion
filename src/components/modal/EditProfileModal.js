import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Modal from 'react-native-modal';
import {showMessage} from 'react-native-flash-message';

import colors from '../../styles/colors';
import {Check, Female, Male} from '../Icons';
import {addUserInfo} from '../../redux/reducers';

const EditProfileModal = ({isVisible, onClose, onPressClose}) => {
  const userInfo = useSelector(state => state.userInfo);
  const [editGender, setEditGender] = useState(userInfo.gender);
  const [editName, setEditName] = useState(userInfo.name);
  const [editPhone, setEditPhone] = useState(userInfo.phoneNumber);
  const [editBirthday, setEditBirthday] = useState(userInfo.birthday);
  const [birthdayValue, setBirthdayValue] = useState('');
  const dispatch = useDispatch();

  function handleSave() {
    const updatedUserInfo = {
      ...userInfo,
      gender: editGender,
      name: editName,
      phoneNumber: editPhone,
      birthday: editBirthday,
    };

    dispatch(addUserInfo(updatedUserInfo));
    showMessage({
      message: 'Changes saved successfully!',
      type: 'success',
      floating: true,
    });
    onClose();
  }

  function handleBirthday(text) {
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
    setBirthdayValue(formattedDate);
    setEditBirthday(formattedDate);
  }

  return (
    <Modal
      isVisible={isVisible}
      swipeDirection="down"
      backdropOpacity={0}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.modal}>
        <View style={styles.gender_container}>
          <TouchableOpacity
            style={styles.male_button_container}
            activeOpacity={0.7}
            onPress={() => setEditGender('Male')}>
            {editGender === 'Male' && (
              <View style={styles.checkBox}>
                <Check />
              </View>
            )}
            <Male />
            <Text style={styles.gender_text}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.female_button_container}
            activeOpacity={0.7}
            onPress={() => setEditGender('Female')}>
            {editGender === 'Female' && (
              <View style={styles.checkBox}>
                <Check />
              </View>
            )}
            <Female />
            <Text style={styles.gender_text}>Female</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.input}
          value={birthdayValue ? birthdayValue : editBirthday}
          placeholder={editBirthday}
          onChangeText={text => handleBirthday(text)}
          placeholderTextColor={colors.inputTextGray}
          keyboardType="numeric"
          maxLength={10}
        />
        <TextInput
          style={styles.input}
          placeholder={userInfo.name}
          onChangeText={text => setEditName(text)}
          placeholderTextColor={colors.inputTextGray}
        />

        <TextInput
          style={styles.input}
          placeholder={userInfo.phoneNumber}
          onChangeText={text => setEditPhone(text)}
          placeholderTextColor={colors.inputTextGray}
          keyboardType="numeric"
          maxLength={15}
        />
        <View style={styles.button_container}>
          <TouchableOpacity
            style={styles.close_container}
            activeOpacity={0.7}
            onPress={onPressClose}>
            <Text style={styles.button_text}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.save_container}
            activeOpacity={0.7}
            onPress={handleSave}>
            <Text style={styles.button_text}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default EditProfileModal;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 20,
    width: '100%',
    justifyContent: 'space-around',
    paddingHorizontal: 25,
    paddingVertical: 20,
    elevation: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    marginBottom: 10,
    fontFamily: 'Poppins-Medium',
  },
  gender_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
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
  button_container: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  close_container: {
    width: '45%',
    height: 45,
    borderRadius: 5,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  save_container: {
    width: '45%',
    height: 45,
    borderRadius: 5,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  button_text: {
    fontFamily: 'Poppins-Medium',
    color: colors.white,
  },
});
