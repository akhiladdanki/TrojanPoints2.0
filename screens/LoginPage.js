import { StyleSheet, Text, View,TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const LoginPage = ({navigation}) => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const login=()=>{
      if(email == '' || password == ''){
       email == "" ? alert("Enter Email"): alert("Enter Password");
        return;
      }


    }
    // const forgotPassword=()=>{
    //   console.log("CLickedman")

    // }
    // const signInGoogle=()=>{

    // }
    // const signInFaceBook=()=>{
      
    // }
    // const signInApple=()=>{
      
    // }
  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>Login Page</Text>
        <View style={styles.wrapper}>
      <TextInput style={styles.input} value={email} onChangeText={(tar)=>setEmail(tar)} placeholder='Enter Email'/>

      <TextInput style={styles.input} value={password} onChangeText={(tar)=>setPassword(tar)} placeholder='Enter Password' secureTextEntry/>

      <Button title='Sign In' onPress={login}/>
        <View style={{display:"flex",justifyContent:"space-around"}}>
        {/* <View style={{marginVertical:5}}>
        <Button title='Forgot Password' color="grey" onPress={forgotPassword}/>
          </View>  
          <View style={{marginVertical:5,color:"#E7EAF4"}}>
        <Button title='SIGN IN WITH GOOGLE' onPress={signInGoogle}/>
          </View>
          <View style={{marginVertical:5,color:"#E7EAF4"}}>
        <Button title='SIGN IN WITH FACEBOOK' onPress={signInFaceBook}/>
          </View>
          <View style={{marginVertical:5,color:"#E7EAF4"}}>
        <Button title='SIGN IN WITH APPLE' onPress={signInApple}/>
          </View> */}
          <View style={{display:"flex",flexDirection:"row",marginTop:20}}>
        <View style={{display:"flex",flexDirection:"row",marginLeft:80}}>
        <Text>Don't have an account ?</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
            <Text style={{color:"blue",fontSize:16,textDecorationStyle:"dashed"}}> Subscribe</Text>
        </TouchableOpacity>
          </View>    
        </View>
        </View>
      </View>
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
    container:{
        flex:1, 
        alignItems:"center",
        justifyContent:"center"
    },
    textLogin:{
      fontSize:24,
      marginBottom: 20
    },
    wrapper:{
        width:"80%"
    },
    input:{
        marginBottom:12,
        borderWidth:1,
        borderColor:'#bbb',
        borderRadius:5,
        paddingHorizontal:14
    },
    link:{

    }
})