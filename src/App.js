import React from 'react';
import {View,Text} from "react-native"

import Router from './Navigator/Router';
import { Provider as PaperProvider } from 'react-native-paper';


export default class App extends React.Component {
    render() {
        console.disableYellowBox = true;
        return (
            // <View>
            //     <Text>Hello</Text>
            // </View>
            <PaperProvider>
                <Router />
            </PaperProvider>

        );
    }
};