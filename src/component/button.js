import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {themes} from '../themes/theme';
import {ms} from 'react-native-size-matters';

const BottomButton = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
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
    paddingVertical: 16,
    paddingRight: 16,
    position: 'absolute',
    bottom: 58,
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: ms(17),
    fontFamily: themes.light.fontFamily.bold,
  },
});

export default BottomButton;
