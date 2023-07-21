import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {themes} from '../../themes/theme';
import Image from '../../assets/images/_MonolyLogo.svg';
import {ms} from 'react-native-size-matters';
import BottomButton from '../../component/button';
import BottomText from '../../component/bottomText';

const GettingStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.getStartedImage}>
        <Image />
        <View style={styles.textContainer}>
          <Text style={styles.MonoText}>
            Monoly Enclave {'\n'} Management Console
          </Text>
        </View>
      </View>
      <BottomButton
        title="Sign in"
        Press={() => {
          navigation.navigate('login');
        }}
      />
      <BottomText
        textDetail="Don’t have an ID?"
        text="Create now"
        Press={() => {
          navigation.navigate('register');
        }}
      />
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
  getStartedImage: {
    // flexGrow: 1,
    marginTop: ms(247),
    marginBottom: ms(430),
  },
  textContainer: {
    // flexGrow: 1,
    paddingTop: ms(20),
    paddingLeft: ms(16),
    paddingRight: ms(16),
  },
  MonoText: {
    fontSize: ms(20),
    textAlign: 'center',
    fontFamily: themes.light.fontFamily.medium,
    color: themes.light.color.black,
  },
});

export default GettingStarted;
