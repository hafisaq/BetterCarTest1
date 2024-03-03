import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import HamburgerMenu from '../assets/icons/hamburgerMenu';
// import BellIcon from '../assets/icons/bellicon';


const FirstScreen = ({ navigation }) => {
  // Use useLayoutEffect to set the navigation options
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ flexDirection: 'row', paddingRight: 10 }}>
          {/* <BellIcon />
          <HamburgerMenu /> */}
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hey</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(1,47,19,255)',
  },
  text: {
    fontSize: 24,
  },
});

export default FirstScreen;
