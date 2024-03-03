// BottomModal.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import LoginButton from './LoginButton';
import FirstScreen from '../screens/FirstScreen';

const paragraphs = [
  'Get your Premium car  the go',
  'Do online payments',
  'Paragraph 3',
];

const BottomModal = ({primaryTitle, secondaryTitle, showSecondaryButton,navigation}) => {
  return (
    <View style={styles.modalContainer}>
      <Swiper style={styles.wrapper} autoplay autoplayTimeout={2}>
        {paragraphs.map((paragraph, index) => (
          <View key={index} style={styles.slide}>
            <Text style={styles.text}>{paragraph}</Text>
          </View>
        ))}
      </Swiper>
      <LoginButton
        navigation={navigation}
        primaryTitle={primaryTitle}
        onPressPrimary={() => navigation.navigate('First')}
        secondaryTitle={secondaryTitle}
        showSecondaryButton={showSecondaryButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    color: '#000',
    textAlign: 'center',
    fontSize: 40,
  },
});

export default BottomModal;
