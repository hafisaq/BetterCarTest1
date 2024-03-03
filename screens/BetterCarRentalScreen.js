import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LoginButton from '../components/LoginButton'; 
import BottomModal from '../components/BottomModal';

const BetterCarRentalScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
      
       
        <Image
          source={require('../assets/logo1.jpg')} 
          style={styles.image}
        />
        <BottomModal
          primaryTitle="Get Started!"
          secondaryTitle="Login"
          showSecondaryButton={true}
          navigation={navigation}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(1,47,19,255)', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff', 
    fontSize: 24,
    marginBottom: 20, 
  },
  image: {
    width: 200, 
    height: 200, 
    marginBottom: 190,
  },
});

export default BetterCarRentalScreen;
