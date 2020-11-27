import React, {useState} from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Card, Header, Icon } from 'react-native-elements';
import {  Colors, Switch, TextInput,Button  } from 'react-native-paper';


function DrawerLeftIcon({navigation}) {
  return (
  <Icon
  name='menu' 
  color="#fff"
  onPress = {() => navigation.openDrawer()}/>
  )
}

const MainTabScreen = ({navigation}) =>{
const [unite, setUnit] = useState('feet')
const [isSwitchOn, setSwitchOn] = useState(false)
const [roomSize, setRoomSize] = useState('');
const [pricePerUnit, setPricePerUnit] = useState('');
const [instalationPrice, setInstalationPrice] = useState('');

const [flooringPrice, setFlooringPrice] = useState(0);
const [totalInstalationPrice, setTotalInstalationPrice] = useState(0);
const [totalCost, setTotalCost] = useState(0);
const [priceWithTax, setPriceWithTax] = useState(0);

const onToggleSwitch = () => {
  setSwitchOn(!isSwitchOn)
  console.log("changed switch");
  setUnit(!isSwitchOn ?  'meter' : 'feet')
}

const _doCalculation = () => {
  console.log("pressed");
  console.log(`result data ${roomSize}, installtion ${instalationPrice}, price per unit ${pricePerUnit}`);
  if(roomSize != 0 || instalationPrice != 0 || pricePerUnit != 0) { 
    const flPrice = roomSize*pricePerUnit
    const iPrice = roomSize*instalationPrice
    const tPrice = flPrice+iPrice
    const txtPrice = tPrice*0.13
    setFlooringPrice(roomSize*pricePerUnit)
    setTotalInstalationPrice(roomSize*instalationPrice)
    setTotalCost(tPrice)
    setPriceWithTax(txtPrice)
  } else {
    Alert.alert("Oops!!","Please fill all fields to calculate.")
  }
}

return ( 
  <View >
    <Header
     leftComponent={<DrawerLeftIcon navigation={navigation}/>}
     centerComponent={{ text: 'Home', style: { color: '#fff' } }} />
    <View style={styles.container, {width:"100%"}}>
      <Card style={{alignItems: 'center'}}>
        <View style={{flexDirection:'row', alignSelf:"center"}}>
          <Text >feet</Text>
          <Switch value={isSwitchOn} color={Colors.blueA200} onValueChange={onToggleSwitch} />
          <Text>meter</Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <TextInput
            style={{width:"80%"}}
            label="Room size "
            theme={{ colors: { primary: Colors.blueA200 } }}
            placeholder="Enter Room size"
            value={roomSize}
            mode="outlined"
            maxLength={10}
            keyboardType="numeric"
            onChangeText={text => setRoomSize(text)}
          />
          <Text style={styles.uniteText}> {unite} </Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <TextInput
            style={{width:"80%"}}
            theme={{ colors: { primary: Colors.blueA200 } }}
            label="Price per unit flooring"
            placeholder="Enter Price per unit"
            value={pricePerUnit}
            maxLength={10}
            keyboardType="numeric"
            mode="outlined"
            onChangeText={text => setPricePerUnit(text)}
          />  
          <Text style={styles.uniteText}> {unite} </Text>
        </View>

        <View style={{flexDirection:'row'}}>
          <TextInput
           theme={{ colors: { primary: Colors.blueA200 } }}
            style={{width:"80%"}}
            label="Price per unit installtion"
            placeholder="Enter Price per unit installation"
            value={instalationPrice}
            maxLength={10}
            keyboardType="numeric"
            mode="outlined"
            onChangeText={text => setInstalationPrice(text)}
          />  
          <Text style={styles.uniteText}> {unite} </Text>
        </View>

        <Button mode="contained"  onPress={_doCalculation} style={{borderRadius: 20, margin:25, backgroundColor:Colors.blueA200}}>
          Calculate
        </Button>
      </Card>

      <Card style={{alignItems: 'center'}}>
        <View style={styles.resultView}>
            <Text> Flooring Price :  </Text>
            <Text>{flooringPrice}</Text>
        </View>
        <View style={styles.resultView}>
            <Text> Installation Price :  </Text>
            <Text>{totalInstalationPrice}</Text>
        </View>
        <View style={styles.resultView}>
            <Text> Total Cost Price :  </Text>
            <Text>{totalCost}</Text>
        </View>
        <View style={styles.resultView}>
            <Text> Total Cost with Text :  </Text>
            <Text>{priceWithTax}</Text>
        </View>
    </Card>

    </View>
</View>
)};

export default MainTabScreen;
  
const styles =  StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
  },
  uniteText : {
    alignItems:"center",
    justifyContent: 'center',
    alignSelf:"center",
    padding:10,
    color:Colors.blueA200
  },
  resultView : {
    flexDirection:'row',
    alignSelf:"center", 
    justifyContent:'space-between', 
    width:'100%'
  }
});
