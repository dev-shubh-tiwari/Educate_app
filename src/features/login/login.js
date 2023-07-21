import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {themes} from '../../themes/theme';
import {ms} from 'react-native-size-matters';
import BottomButton from '../../component/button';
import BottomText from '../../component/bottomText';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign in</Text>
      <Text style={styles.inputTag}>Email address</Text>
      <TextInput style={styles.input} />
      <View style={styles.buttonContainer}>
        <BottomButton title="Sign in" />
        <BottomText
          textDetail="Don’t have an ID?"
          text="Create now"
          Press={() => {
            navigation.navigate('register');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: ms(35),
    fontFamily: themes.light.fontFamily.bold,
    color: themes.light.color.black,
    marginTop: ms(44),
    marginLeft: ms(16),
  },
  input: {
    width: '90%',
    height: ms(40),
    borderColor: themes.light.color.grey,
    borderBottomWidth: 1,

    marginBottom: ms(10),
    marginHorizontal: ms(16),

    position: 'absolute',
    top: ms(162),
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputTag: {
    position: 'absolute',
    top: ms(138),
    left: ms(16),
  },
});

export default Login;
