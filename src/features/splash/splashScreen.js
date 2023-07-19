import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import {themes} from '../../themes/theme';
import Image from '../../assets/images/_MonolyLogo.svg';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('auth');
  }, 3000);

  return (
    <View style={styles.container}>
      <Image style={styles.splashImage} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themes.light.color.white,
  },
  splashImage: {},
});

export default SplashScreen;
