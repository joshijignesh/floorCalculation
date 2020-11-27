import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import MainScreen from './screens/MainScreen';
import AboutScreen from './screens/AboutScreen';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const App = () => {
  
  const Drawer = createDrawerNavigator();

  return (
    
    <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} > 
          <Drawer.Screen name="HomeScreen" component={MainScreen} />
          <Drawer.Screen name="AboutScreen" component={AboutScreen} />
        </Drawer.Navigator>
        </NavigationContainer>
  );
}

export default App;
