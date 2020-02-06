import React from "react";
import { View, Text, ScrollView, FlatList, Image } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios'
// import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Octicons';
import Icon3 from 'react-native-vector-icons/Fontisto';
import Icon4 from 'react-native-vector-icons/SimpleLineIcons';

export default class Notificatons extends React.Component {
    static navigationOptions = {
        tabBarLabel: () => { return null },

        tabBarIcon: ({ focused, tintColor }) => {
            return <Icon name={"notifications"} size={25} color={tintColor} />;
        },
    }; constructor(props) {
        super(props)
        this.state = {
            loading: false,
            data: [],
            newData: [], firstQuery: ""
        }
        this.url = "https://vindecoder.p.rapidapi.com/salvage_check";
    }

    componentDidMount() {

        axios.get(this.url, {
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "vindecoder.p.rapidapi.com",
                "x-rapidapi-key": "a1a9e29294mshf4c18dee5e500c8p182f3ajsn55d73a2a0598"
            }, "params": {
                "vin": "4T4BF1FKXER340134"
            }
        }).then((response) => {
            console.log("myresponse", response.data.info)
            let array = []
            array.push({ data: response.data.info })
            this.setState({ data: array })
        }).catch((error) => {
            console.log("myerro", error)

        })
    }




    showSpinner() {
        if (!this.state.loading) {
            return (<View style={{ flex: 1 }}>
                <Spinner />
            </View>)
        }

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
                        Notifications
           </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', marginTop: 20 }}>
                    <Icon name={"notifications"} size={25} color={"#74C5D5"} />
                </View>
            </View>
        )
    }
    // renderSearch() {
    //     const { firstQuery } = this.state;
    //     return (
    //         <View style={{ padding: 10 }}>
    //             <Searchbar
    //                 placeholder="Search"
    //                 onChangeText={query => { this.setState({ firstQuery: query }); }}
    //                 value={firstQuery}
    //                 style={{ borderRadius: 5,height:40 }}
    //             />
    //         </View>
    //     )
    // }
    renderItem = (item) => {
        console.log("MyData", item.item.data)
        const data = item.item.data
        return (
            <View style={{ padding: 25 }}>
                <View style={{ marginLeft: 10, marginRight: 10 }}>
                    <Image
                        style={{ height: 175, width: "100%", borderRadius: 25 }}
                        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbFhb17P0n1t5loeS59KGOJyUTAScZPoUiIP6qX2fjtYdtRj4q" }}
                    />
                    {/* <View style={{ position: 'absolute', width: "100%" }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={{ marginLeft: 30, flex: .75, justifyContent: 'center' }}>
                                <Icon3 name={"favorite"} size={25} color={"yellow"} />
                            </View>
                            <View style={{ flex: .1, justifyContent: 'center' }} >
                                <Icon3 name={"share"} size={18} color={"white"} />
                            </View>
                            <View style={{ flex: .15, justifyContent: 'center' }} >
                                <Icon4 name={"heart"} size={18} color={"white"} />
                            </View>
                        </View>
                    </View> */}
                    <View >
                        <Text style={{alignSelf:'center', fontSize:15, color:'gray'}}>
                            See New Adds for your Recent Search
                        </Text>
                    </View>


                </View>


            </View>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.renderHeader()}
                <ScrollView>


                    {/* <KeyboardAvoidingView behavior="height" enabled>
                        {this.renderSearch()}
                    </KeyboardAvoidingView>
                    {this.renderSlider()} */}
                    <FlatList
                        data={this.state.data}
                        renderItem={(item) => this.renderItem(item)}
                    />
                    <FlatList
                        data={this.state.data}
                        renderItem={(item) => this.renderItem(item)}
                    />
                </ScrollView>

            </View>

        )
    }
}