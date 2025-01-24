import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color, FontFamily, FontSize } from '../utils/theme';

const Header = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello {name}!</Text>
      <Text style={styles.subtext}>Are you ready to dance?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:44, // Add some padding to the header
    backgroundColor: 'white', // Background color for the header
  marginTop:20,
  marginHorizontal:19,

  },
  greeting: {
    fontSize: FontSize.SIZE_26, // Large font size for the greeting
    fontWeight: '600', // Bold text
    color: Color.black, // Text color
    fontFamily:FontFamily.GOTHIC_REGULAR,

  },
  subtext: {
    fontSize: FontSize.SIZE_16, // Smaller font size for the subtext
    color: Color.textColor, // Gray color for the subtext
    marginTop: 4, // Add a small margin between the greeting and subtext
    fontWeight: '400', // Bold text
  },
});

export default Header;
