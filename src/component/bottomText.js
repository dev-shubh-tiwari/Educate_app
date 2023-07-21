import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import {themes} from '../themes/theme';

const BottomText = ({textDetail, text, Press}) => {
  return (
    <View style={styles.container}>
      <Text>{textDetail}</Text>
      <TouchableOpacity onPress={Press}>
        <Text style={styles.linkText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: ms(25),
    flexDirection: 'row',
  },
  linkText: {
    color: themes.light.color.lightGreen,

    fontSize: 16,
    paddingLeft: ms(5),
  },
});

export default BottomText;
