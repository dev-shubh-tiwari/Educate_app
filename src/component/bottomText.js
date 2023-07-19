import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { ms } from 'react-native-size-matters'

const BottomText = ({textDetail,text}) => {
  return (
    <View style={styles.container}>
    <Text>{textDetail}</Text>
    <TouchableOpacity >
      <Text style={styles.linkText}>{text}</Text>
    </TouchableOpacity>
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 25,
      flexDirection:'row',
     
    },
    linkText: {
      color: 'blue', 
    //   textDecorationLine: 'underline', 
      fontSize: 16,
   paddingLeft:ms(5)
    },
  });
  
export default BottomText