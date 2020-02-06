import React from 'react';
import { View, Text, FlatList, Image, AsyncStorage,TouchableOpacity } from 'react-native';
import { Button, CardSection, Header, Spinner } from '../components/common';
import Icon from 'react-native-vector-icons/Fontisto';
import axios from 'axios'
import { NavigationEvents } from "react-navigation";

import { Searchbar } from 'react-native-paper';


export default class Cart extends React.Component {
    static navigationOptions = {
        tabBarLabel:() => {return null},
        tabBarIcon: ({ focused, tintColor }) => {
            const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            return <Icon name={"hipchat"} size={25} color={tintColor} />;
        },
    };
    constructor(){
        super()
        this.state={
            cartData:[],firstQuery: ""
        }
    }
    componentDidMount(){
        
    }
    renderHeader() {
        let mheight = ''
        if (Platform.OS == "ios") {
            mheight = 70
        }
        else {
            mheight = 50
        }
        return (
            <View style={{
                height: mheight, flexDirection: 'row', borderBottomColor: 'gray',
                // shadowColor: "#000",
                // shadowOffset: { width: 0, height: 2 },
                // shadowOpacity: 0.8,
                // shadowRadius: 2,
                // shadowRadius: 2,
                borderBottomWidth: .3
            }}>
                <View style={{ flex: 8, justifyContent: "center", marginTop: 20 }}>
                    <Text style={{ marginLeft: 10, fontSize: 22, fontWeight: 'bold' }}>
                        Inbox
           </Text>
                </View>
                {/* <View style={{ flex: 1, justifyContent: 'center', marginTop: 20 }}>
                    <Icon2 name={"settings"} size={25} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', marginTop: 20 }}>
                    <Icon name={"search1"} size={22} />
                </View> */}
            </View>
        )
    }
    renderSearch() {
        const { firstQuery } = this.state;
        return (
            <View style={{ padding: 10 }}>
                <Searchbar
                    placeholder="Search your user or car"
                    onChangeText={query => { this.setState({ firstQuery: query }); }}
                    value={firstQuery}
                    style={{ borderRadius: 5,height:40 }}
                />
            </View>
        )
    }
    
    
    render() {
        return (<View style={{ flex: 1 }}>
           {this.renderHeader()}
           {this.renderSearch()}
           
        </View>)
    }
}