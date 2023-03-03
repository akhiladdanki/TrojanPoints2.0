import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image} from 'react-native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './components/HomePage';
import Feed from './components/Feed';
import ProfilePage from './components/ProfilePage';
import Setup from './components/Setup';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import Instructions from './components/Instructions';
import Shop from './components/Shop';


const Drawer = createDrawerNavigator();
export default function App() {
const headerInfo = "Award Trojan Points";
const headerSubInfo = "Reward a colleague for going above and beyond"

  return (
    <NavigationContainer>
      <Drawer.Navigator  drawerContent={(props)=><CustomDrawer {...props} />} >
        <Drawer.Screen name="Award Trojan Points" component={HomePage}/>
        <Drawer.Screen name="Trojan Points Feed" component={Feed}/>
        <Drawer.Screen name="My Profile" component={ProfilePage}/>
        <Drawer.Screen name="Contact Us" component={Setup}/>
        <Drawer.Screen name="Instructions" component={Instructions}/>
        <Drawer.Screen name="Shop" component={Shop}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
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
      <Image source = {require("./assets/keck-logo.png")} resizeMode = "contain" style = {styles.SideBarImage}/>
      </View>
    <DrawerItemList {...props}/>
   </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  SideBarImage: {
    width: 60, height: 60, borderRadius: 30, backgroundColor: "#FFCC00"
  },
  mainSideBar: {display: "flex",flexDirection: "row", justifyContent: "space-between", padding: 20}
 });
