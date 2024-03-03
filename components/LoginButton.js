// LoginButton.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LoginButton = ({ primaryTitle, secondaryTitle, showSecondaryButton ,onPressPrimary }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPressPrimary} style={styles.primaryButton}>
        <Text style={styles.buttonText}>{primaryTitle}</Text>
      </TouchableOpacity>
      {showSecondaryButton && (
        <TouchableOpacity onPress={() => {}} style={styles.secondaryButton}>
          <Text style={styles.buttonText2}>{secondaryTitle}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor:'rgba(1,47,19,255)',
    width: 290,
    height:50,
    padding: 10,
    borderRadius: 13,
    alignItems: 'center',
    borderColor:'#fa0101',
    borderWidth:1,
    marginBottom: 10, // Adds space between the two buttons
  },
  secondaryButton: {
    width: 290,
    padding: 10,
    alignItems: 'center',
  },
  buttonText2: {
    color: '#010101',
    fontSize: 16,
  },
  buttonText:{
    color: '#ffff',
    marginTop:6
  }
});

export default LoginButton;
