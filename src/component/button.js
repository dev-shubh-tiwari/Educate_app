import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {themes} from '../themes/theme';
import {ms} from 'react-native-size-matters';

const BottomButton = ({Press, title}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={Press}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '90%',
    backgroundColor: themes.light.color.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: ms(16),
    paddingRight: ms(16),
    position: 'absolute',
    bottom: ms(58),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: ms(17),
    textAlign: 'center',
    fontFamily: themes.light.fontFamily.bold,
  },
});

export default BottomButton;
