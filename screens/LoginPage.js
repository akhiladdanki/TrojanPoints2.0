import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState,useEffect } from "react";
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginPage = ({ navigation }) => {
  const auth = getAuth();
  const [userInfo,setUserInfo]=useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signInWithEmail=async()=> {
   await signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      const user = userCredential.user;
      setUserInfo(user.uid);
      setEmail("");
      setPassword("");
      navigation.navigate('Trojan Points Feed')
    })
    .catch((err)=>{
      console.log(err)
    })  
  }
  const addStore=async()=>{
    try{
      if(userInfo)
      await AsyncStorage.setItem('userId',userInfo);
     }
     catch(err){
       console.log(err)
     }
  }
  useEffect(()=>{
    addStore();
  },[userInfo])
  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>Login Page</Text>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(tar) => setEmail(tar)}
          placeholder="Enter Email"
        />

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(tar) => setPassword(tar)}
          placeholder="Enter Password"
          secureTextEntry
        />

        <Button title="Sign In" onPress={()=>signInWithEmail()} />
        <View style={{ display: "flex", justifyContent: "space-around" }}>
          <View
            style={{ display: "flex", flexDirection: "row", marginTop: 20 }}
          >
            <View
              style={{ display: "flex", flexDirection: "row", marginLeft: 80 }}
            >
              <Text>Don't have an account ?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Register");
                }}
              >
                <Text
                  style={{
                    color: "blue",
                    fontSize: 16,
                    textDecorationStyle: "dashed",
                  }}
                >
                  {" "}
                  Subscribe
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textLogin: {
    fontSize: 24,
    marginBottom: 20,
  },
  wrapper: {
    width: "80%",
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {},
});
