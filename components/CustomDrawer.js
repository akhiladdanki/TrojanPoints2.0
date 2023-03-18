import React from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
    <View style = {styles.mainSideBar}>
      <View>
        <Text>
          Akhil 
        </Text>
        <Text>
          Akhil@gmail.com
        </Text>
      </View>
      <Image source = {require("../assets/keck-logo.png")} resizeMode = "contain" style = {styles.SideBarImage}/>
      </View>
    <DrawerItemList {...props}/>
   </DrawerContentScrollView>
  );
}

export default CustomDrawer;

const styles = StyleSheet.create({
  SideBarImage: {
      width: 60, height: 60, borderRadius: 30, backgroundColor: "#FFCC00"
    },
    mainSideBar: {display: "flex",flexDirection: "row", justifyContent: "space-between", padding: 20}
})