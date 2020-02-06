import React from "react";
import {View,Text} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';

export default class Profile extends React.Component{
    static navigationOptions = {
        tabBarLabel:() => {return null},
        tabBarIcon: ({ focused, tintColor }) => {
            const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            return <Icon name={"md-person"} size={25} color={tintColor} />;
        },
    };

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
                        My Profile
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
    render(){
        return(
            <View>
               {this.renderHeader()}
            </View>
        )
    }
}