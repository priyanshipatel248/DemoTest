import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Color } from '../utils/theme';

const DividerText = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>or Sign In with:</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16, // Spacing above and below
  },
  line: {
    flex: 1, // Takes equal space on both sides
    height: 1, // Line thickness
    backgroundColor: Color.divider,
  },
  text: {
    marginHorizontal: 8, // Space between lines and text
    fontSize: 14,
    color:  Color.divider,
  },
});

export default DividerText;
