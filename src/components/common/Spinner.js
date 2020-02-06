import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner=({size}) =>{
return(
     <View style={styles.spinnerStyle}>
        <ActivityIndicator size={size || 'large'} color={"#74C5D5"}/>
     </View>
   );
};
const styles={
    spinnerStyle:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    }
};

export {Spinner};