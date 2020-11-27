import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Header, Icon  } from 'react-native-elements';


function DrawerLeftIcon({navigation}) {
  return (
    <Icon
      name='back_arrow' 
      color="#fff"
      onPress = {() => navigation.goBack()}/>
  )
}

const DetailsScreen = ({navigation}) =>{

return ( 
  <View >
    
    <Header
      placement="left"
      leftComponent={<DrawerLeftIcon navigation={navigation} />}
      centerComponent={{ text: 'About', style: { color: '#fff' } }}
    />
    <View>
    <Text> About Screen </Text>
    </View>
</View>
)};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
