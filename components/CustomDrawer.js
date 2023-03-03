import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {


  return (
   <DrawerContentScrollView {...props}>
    <DrawerItemList {...props}/>
   </DrawerContentScrollView>
  );
}

export default CustomDrawer;
