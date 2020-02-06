import React from 'react';
import { View, Text, FlatList, Image, AsyncStorage, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Button, CardSection, Header, Spinner } from '../components/common';
import Icon from 'react-native-vector-icons/Fontisto';
import axios from 'axios'
import { NavigationEvents } from "react-navigation";
import moment from 'moment'
import { Searchbar } from 'react-native-paper';
import { Avatar } from 'react-native-paper';

const messages = [
    {
        name: "Jhon",
        date: moment().format('ll'),
        message: "hello Brother I want to buy ",
        img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        name: "William",
        date: moment().format('ll'),
        message: "What is the price ? ",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg'

    },
    {
        name: "Ahmad",
        date: moment().format('ll'),
        message: "Welcome ",
        img: 'https://miro.medium.com/max/2560/1*gBQxShAkxBp_YPb14CN0Nw.jpeg'

    },
    {
        name: "Khalil",
        date: moment().format('ll'),
        message: "ok got it ",
        img: 'https://www.lifewire.com/thmb/JbIIh6ewCm49Eon66ExjbxCFJfg=/1080x1080/smart/filters:no_upscale()/fb-block-5b0a48eaba61770036afbed4-7df519e007a64108a65084e814ee4740.jpg'

    },
    {
        name: "Jhon",
        date: moment().format('ll'),
        message: "hello Brother I want to buy ",
        img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
        name: "William",
        date: moment().format('ll'),
        message: "What is the price ? ",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg'

    },
    {
        name: "Ahmad",
        date: moment().format('ll'),
        message: "Welcome ",
        img: 'https://miro.medium.com/max/2560/1*gBQxShAkxBp_YPb14CN0Nw.jpeg'

    },
    {
        name: "Khalil",
        date: moment().format('ll'),
        message: "ok got it ",
        img: 'https://www.lifewire.com/thmb/JbIIh6ewCm49Eon66ExjbxCFJfg=/1080x1080/smart/filters:no_upscale()/fb-block-5b0a48eaba61770036afbed4-7df519e007a64108a65084e814ee4740.jpg'

    }
]
export default class Cart extends React.Component {
    static navigationOptions = {
        tabBarLabel: () => { return null },
        tabBarIcon: ({ focused, tintColor }) => {
            const iconName = `ios-information-circle${focused ? '' : '-outline'}`;
            return <Icon name={"hipchat"} size={25} color={tintColor} />;
        },
    };
    constructor() {
        super()
        this.state = {
            cartData: [], firstQuery: ""
        }
    }
    componentDidMount() {

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
                    style={{ borderRadius: 5, height: 40 }}
                />

            </View>
        )
    }

    renderItem = (item) => {
        console.log("item", item)
        let data = item.item
        return (
            <TouchableOpacity>
                <View style={{ padding: 10 }}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{ flex: 1.5 }}>
                            <Avatar.Image size={50} source={{ uri: data.img }} style={{ backgroundColor: '#74C5D5' }} />
                        </View>
                        <View style={{ flex: 6.5 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                                {data.name}
                            </Text>
                            <Text style={{ fontSize: 14, color: 'gray' }}>
                                {data.message}
                            </Text>
                        </View>
                        <View style={{ flex: 2 }}>
                            <Text style={{ fontSize: 14, color: 'gray' }}>
                                {data.date}
                            </Text>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>

        )
    }

    render() {
        return (<View style={{ flex: 1 }}>
            {this.renderHeader()}
            <KeyboardAvoidingView behavior="height" enabled>
                {this.renderSearch()}
            </KeyboardAvoidingView>
            <FlatList
                data={messages}
                renderItem={(item) => this.renderItem(item)}
            />

        </View>)
    }
}