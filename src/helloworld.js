import React from "react";
import { Text, View,StyleSheet } from "react-native";

const HelloWorld = () =>{
    return (
        <View style ={MyStyle.ViewStyle}>
            <Text style = {MyStyle.TextStyle}>HelloWorld</Text>
        </View>
    );
};
const MyStyle = StyleSheet.create(
    {
        ViewStyle:{
            width: 100,
            height: 100,
            backgroundColor: 'aqua',
            alignItems: 'center',
            justifyContent: 'center',
        },
        TextStyle:{
            color:'black',
        },
    }
)
export default HelloWorld;