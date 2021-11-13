import React from "react";
import { TouchableOpacity, Text, View, Touchable, StyleSheet } from "react-native";

const Button = (props) => (
    <TouchableOpacity 
        onPress = {props.onPress}
        style = {{
            backgroundColor: "#ff637c",
            alignSelf: "center",
            padding: 10,
            margin: 10,
            ...props.buttonStyle,
        }}
    >
        <Text style = {{ color: "#fff"}}>{props.text}</Text>
    </TouchableOpacity>
);

const CustomComponent = () => (
    <View style = {{flex:1, justifyContent:"center"}}>
        <Button text="Say Hello" onPress={()=> alert("hello!")}></Button>
        <Button text="say Goodbye" onPress={() => alert("goodbye!")} buttonStyle={{backgroundColor: "#4dc2c2"}} ></Button>
    </View>
);

export default CustomComponent;