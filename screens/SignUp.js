import { StyleSheet, Text, View ,TextInput,Button,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'

const SignUp = ({navigation}) => {
    const [name,setName]=useState(null);
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [reapeatedPassword,setRepeatedPassword]=useState(null);

    const handleSignUp=()=>{

    }

  return (
    <View style={styles.container}>
        <Text style={styles.textSignUp}>SignUp Page</Text>
        <View style={styles.wrapper}>
        <TextInput style={styles.input} value={name} onChangeText={(tar)=>setName(tar)} placeholder='Enter Name'/>

      <TextInput style={styles.input} value={email} onChangeText={(tar)=>setEmail(tar)} placeholder='Enter Email'/>

      <TextInput style={styles.input} value={password} onChangeText={(tar)=>setPassword(tar)} placeholder='Enter Password' secureTextEntry />
      <TextInput style={styles.input} value={reapeatedPassword} onChangeText={(tar)=>setRepeatedPassword(tar)} placeholder='Repeated Password' secureTextEntry/>

      <Button title='Sign Up' onPress={handleSignUp}/>
      <View style={{display:"flex",flexDirection:"row",marginTop:20}}>
        <Text>Already have an account ?</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Login Page')}}>
            <Text style={{color:"blue"}}> Login</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    textSignUp:{
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