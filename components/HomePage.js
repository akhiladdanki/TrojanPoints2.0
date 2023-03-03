import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView, ScrollViewBase } from "react-native";
import {  TextInput } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import userData from '../data/userData.json';
import Checkbox from 'expo-checkbox';
import {AirbnbRating, Button} from '@rneui/themed';

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        height: 1000

    },
    container:{
        //height:undefined,
        
        flexGrow:1
    },
    header: {
        // backgroundColor: "#FFCC00",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center"
    },
    description: {
        marginTop: 10,
        border: 2,
        padding: 20

    },
    textDescription: {
        lineHeight: 30,
        fontSize: 14
    },
    iconPhone: {
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center"
    },
    textHeader: {
        fontSize: 30

    }, iconPhoneAwesome: {
        fontSize: 24
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: "gray",
        paddingHorizontal: 15,
        paddingVertical: 20,
        padding: 20
    },
    inputTextContainer: {

    },
    mainCheckbox: {
        marginTop: 10,
        marginLeft: 15

    },
    checkbox: {
        display: "flex",
        flexDirection: "row",
        gap: 20,
        marginTop: 20
    },
    subCheckbox:{
        width: 30,
        height: 30
    },
    textCheckbox:{
        fontSize: 20

    },
    textCheckboxContainer:{
        marginLeft:10, 
        marginTop:4
    },
    ratingContainer:{
        //marginTop: 10
    }

})


const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState(userData)
    const [isChecked, setIsChecked] = useState({
        isChecked1:false,
        isChecked2:false,
        isChecked3:false,
        isChecked4:false,
        isChecked5:false,
        isChecked6:false,
        isChecked7:false,
        isChecked8:false,
        isChecked9:false,
        isChecked10:false
    })
    console.log(searchQuery, "Search Here")
    return (


        <SafeAreaView style= {styles.mainContainer}>
            
            <ScrollView style= {styles.container}>


            <View style={styles.header}>
                <Text style={styles.textHeader}>Award Trojan Points</Text>
            </View>
            <View style={styles.iconPhone}>
                <FontAwesome name="thumbs-up" style={styles.iconPhoneAwesome} />
            </View>
            <View style={styles.description}>
                <Text style={styles.textDescription}>
                    Reward a colleague for going above and beyond.
                </Text>

            </View>

            <View style={styles.inputContainer}>

                <TextInput
                    style={{fontSize:18}}
                    placeholder="Enter Peer's Med Email "

                />
            </View>


            <View style = {styles.mainCheckbox}>
                <View style = {styles.checkbox}>
                <Checkbox
                    value={isChecked.isChecked1}
                    onValueChange={()=>setIsChecked({...isChecked,isChecked1:!isChecked.isChecked1})}
                    style={styles.subCheckbox}
                />
                <View style = {styles.textCheckboxContainer}>
                <Text style = {styles.textCheckbox}>
                    Authenticity
                </Text>
                </View>

                </View>
                <View style = {styles.checkbox}>
                <Checkbox
                    value={isChecked.isChecked2}
                    onValueChange={()=>setIsChecked({...isChecked,isChecked2:!isChecked.isChecked2})}
                    style={styles.subCheckbox}
                />
                <View style = {styles.textCheckboxContainer}>
                <Text style = {styles.textCheckbox}>
                    Innovative
                </Text>
                </View>

                </View>
                <View style = {styles.checkbox}>
                <Checkbox
                    value={isChecked.isChecked3}
                    onValueChange={()=>setIsChecked({...isChecked,isChecked3:!isChecked.isChecked3})}
                    style={styles.subCheckbox}
                />
                <View style = {styles.textCheckboxContainer}>
                <Text style = {styles.textCheckbox}>
                    Compassionate
                </Text>
                </View>
                </View>
                <View style = {styles.checkbox}>
                <Checkbox
                    value={isChecked.isChecked4}
                    onValueChange={()=>setIsChecked({...isChecked,isChecked4:!isChecked.isChecked4})}
                    style={styles.subCheckbox}
                />
                <View style = {styles.textCheckboxContainer}>
                <Text style = {styles.textCheckbox}>
                    Professionalism
                </Text>
                </View>
                </View>
                <View style = {styles.checkbox}>
                <Checkbox
                    value={isChecked.isChecked5}
                    onValueChange={()=>setIsChecked({...isChecked,isChecked5:!isChecked.isChecked5})}
                    style={styles.subCheckbox}
                />
                <View style = {styles.textCheckboxContainer}>
                <Text style = {styles.textCheckbox}>
                    Collegiality
                </Text>
                </View>
                </View>
                <View style = {styles.checkbox}>
                <Checkbox
                    value={isChecked.isChecked6}
                    onValueChange={()=>setIsChecked({...isChecked,isChecked6:!isChecked.isChecked6})}
                    style={styles.subCheckbox}
                />
                <View style = {styles.textCheckboxContainer}>
                <Text style = {styles.textCheckbox}>
                    Efficiency
                </Text>
                </View>
                </View>
                <View style = {styles.checkbox}>
                <Checkbox
                    value={isChecked.isChecked7}
                    onValueChange={()=>setIsChecked({...isChecked,isChecked7:!isChecked.isChecked7})}
                    style={styles.subCheckbox}
                />
                <View style = {styles.textCheckboxContainer}>
                <Text style = {styles.textCheckbox}>
                    Communication
                </Text>
                </View>
                </View>
                <View style = {styles.checkbox}>
                <Checkbox
                    value={isChecked.isChecked8}
                    onValueChange={()=>setIsChecked({...isChecked,isChecked8:!isChecked.isChecked8})}
                    style={styles.subCheckbox}
                />
                <View style = {styles.textCheckboxContainer}>
                <Text style = {styles.textCheckbox}>
                    Leadership
                </Text>
                </View>
                </View>
                <View style = {styles.checkbox}>
                <Checkbox
                    value={isChecked.isChecked9}
                    onValueChange={()=>setIsChecked({...isChecked,isChecked9:!isChecked.isChecked9})}
                    style={styles.subCheckbox}
                />
                <View style = {styles.textCheckboxContainer}>
                <Text style = {styles.textCheckbox}>
                    Teamwork
                </Text>
                </View>
                </View>
                <View style = {styles.checkbox}>
                <Checkbox
                    value={isChecked.isChecked10}
                    onValueChange={()=>setIsChecked({...isChecked,isChecked10:!isChecked.isChecked10})}
                    style={styles.subCheckbox}
                />
                <View style = {styles.textCheckboxContainer}>
                <Text style = {styles.textCheckbox}>
                    KNOWN Service Standards
                </Text>
                </View>
                </View>
                <View style = {styles.ratingContainer}>
                    <View style = {{ marginTop:20}}>
                    <Text style = {styles.textCheckbox}>
                    Trojan Points to Award:
                </Text>
                    </View>
                    <AirbnbRating
                    count={5}
                    size={40}
                    reviews={[]}
                    />

                </View>
                <View>
                <View>
                    <View style= {{marginTop: 10}}>
                    <Text style = {styles.textCheckbox}>
                            Comments:
                        </Text>
                    </View>
                    <View style= {{borderWidth: 1,marginTop: 6,width:'96%',height:100, borderRadius:15 }}>
                    <TextInput
                    editable
                    multiline
                    maxLength={500}
                    numberOfLines={5}
                    style = {{padding:10,top:10,fontSize:14}}
                    />
                    </View>
                </View>
                </View>
                <View>
                    <Button
                    title='Submit Trojan Points'
                    containerStyle={{
                        width:200,
                        marginHorizontal: 80,
                        marginVertical: 20,
                        borderRadius: 10
                    }}
                    buttonStyle={{backgroundColor: "#990000"}}
                    />
                </View>

            </View>

            </ScrollView>
            
       </SafeAreaView>

    )
}
export default HomePage;