import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Fonts } from '../../utilts/Fonts';

const Header =(props)=>{
    return(
         <View style={styles.viewStyle}>
           <Text style={styles.textStyle}>{props.headerText}</Text>
         </View>
    );  
};
const styles =StyleSheet.create({
    viewStyle: {
        backgroundColor:'#1095E3',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:10,
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:1.9,
        elevation: 2,
        position:'relative',
        // borderBottomWidth:3,
        // borderColor:'11111',
        // borderWidth:2,
       
    },
    textStyle: {
        fontFamily:Fonts.BurlingameProRegular,
        fontSize:30,
        color:'white',
        fontWeight:'bold'
    }  
})
export {Header};