import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.inputStyle} placeholder='Enter Email ID' />
      <TextInput style={styles.inputStyle} placeholder='Enter Password' />
      <TouchableOpacity style={styles.loginBtn}>
         <Text style={styles.BtnText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles =StyleSheet.create({
    container:{
        flex:1,
    },
    title:{
     fontSize:20,
     fontWeight:'700',
     color:'#000',
     marginTop:100,
     alignSelf:'center',

    },
    inputStyle:{
        paddingLeft:20,
        height:50,
        alignSelf: 'center',
        marginTop:30,
        borderWidth:.5,
        borderRadius:10,
        width:"90%",
    },
    loginBtn:{
        backgroundColor:'aqua',
        width:"50%",
        height:10,
        alignSelf:'center',
        borderRadius:10,
        marginTop:50,
        justifyContent:'center',
        alignItems:'center'
    },
    BtnText:{
        fontSize:10,
        fontWeight:'600',
        color:'#000'
    }
})