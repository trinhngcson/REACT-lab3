/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HelloWorld from './src/helloworld';
import CapturingTaps from './src/capturingtaps';
import CustomComponent from './src/customComponent';
import State from './src/stateAndprops';
import Styling from './src/styling';
import Scrollable from './src/scrollable';
import Form from './src/form';
import LongList from './src/longlist';


import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const Home = ({navigation}) => {
    return (
        <View style = {styles.sectionContainer}>
            <Button style = {styles.button} title = 'Go to Exercise 1' onPress={()=>{
                navigation.navigate('Exercise 1');
            }}></Button>
            <Button style = {styles.button} title = 'Go to Exercise 2' onPress={()=>{
                navigation.navigate('Exercise 2');
            }}></Button>
            <Button style = {styles.button} title = 'Go to Exercise 3' onPress={()=>{
                navigation.navigate('Exercise 3');
            }}></Button>
            <Button style = {styles.button} title = 'Go to Exercise 4' onPress={()=>{
                navigation.navigate('Exercise 4');
            }}></Button>
            <Button style = {styles.button} title = 'Go to Exercise 5' onPress={()=>{
                navigation.navigate('Exercise 5');
            }}></Button>
            <Button style = {styles.button} title = 'Go to Exercise 6' onPress={()=>{
                navigation.navigate('Exercise 6');
            }}></Button>
            <Button style = {styles.button} title = 'Go to Exercise 7' onPress={()=>{
                navigation.navigate('Exercise 7');
            }}></Button>
            <Button style = {styles.button} title = 'Go to Exercise 8' onPress={()=>{
                navigation.navigate('Exercise 8');
            }}></Button>
        </View>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name ="Home" component={Home} ></Stack.Screen>
                <Stack.Screen name ="Exercise 1" component={HelloWorld} ></Stack.Screen>
                <Stack.Screen name ="Exercise 2" component={CapturingTaps} ></Stack.Screen>
                <Stack.Screen name ="Exercise 3" component={CustomComponent} ></Stack.Screen>
                <Stack.Screen name ="Exercise 4" component={State} ></Stack.Screen>
                <Stack.Screen name ="Exercise 5" component={Styling} ></Stack.Screen>
                <Stack.Screen name ="Exercise 6" component={Scrollable} ></Stack.Screen>
                <Stack.Screen name ="Exercise 7" component={Form} ></Stack.Screen>
                <Stack.Screen name ="Exercise 8" component={LongList} ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    button :{
        marginTop: 20,
        padding: 20,
    }
});

export default App;