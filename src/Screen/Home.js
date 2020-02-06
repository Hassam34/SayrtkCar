import React from 'react';
import { View, Text, FlatList, Image, KeyboardAvoidingView, Platform, StyleSheet, ScrollView } from 'react-native';
import { Button, CardSection, Header, Spinner } from '../components/common';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Octicons';
import Icon3 from 'react-native-vector-icons/Fontisto';
import Icon4 from 'react-native-vector-icons/SimpleLineIcons';


import { Searchbar } from 'react-native-paper';
import Swiper from 'react-native-swiper';
import { verticalScale, scale } from '../common/Scaling';

import axios from 'axios'

const BackgroundImages = [
    {
        title: 'Own Your Ride',
        img: "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        title: 'Benz on the Road',
        img: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        title: 'The best in the Market',
        img: "https://cdn.pixabay.com/photo/2016/06/20/22/41/mercedes-benz-1470152__340.jpg"
    },
]

export default class Home extends React.Component {
    static navigationOptions = {
        tabBarLabel: () => { return null },
        tabBarIcon: ({ focused, tintColor }) => {
            return <Icon name={"home"} size={25} color={tintColor} />;
        },
    };
    constructor(props) {
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

    renderSlider() {
        return (
            <View style={{ height: 200, }}>
                <Swiper style={{ height: 200, }}
                    autoplay={true}
                    dot={<View style={{
                        backgroundColor: 'white',
                        width: scale(5),
                        height: verticalScale(5),
                        borderRadius: verticalScale(4),
                        marginLeft: scale(2),
                        marginRight: scale(2),

                    }} />}
                    activeDot={
                        <View style={{
                            backgroundColor: '#74C5D5',
                            width: scale(7),
                            height: verticalScale(8),
                            borderRadius: verticalScale(4),
                            marginLeft: scale(2),
                            marginRight: scale(2)
                        }} />

                    }
                    paginationStyle={{
                        alignSelf: "center",
                        marginBottom: verticalScale(4),
                    }}
                >
                    {BackgroundImages.map((item, index) => (
                        <View style={{ marginLeft: 10, marginRight: 10 }} key={`img-${index}`}>
                            <Image source={{ uri: item.img }}
                                // resizeMode=""
                                style={{ height: 200, width: "100%", borderRadius: 5 }} />
                            <View style={{ position: 'absolute' }}>
                                <Text style={{ fontSize: 25, color: "white", fontWeight: 'bold', padding: 10 }}>{item.title}</Text>
                            </View>
                        </View>
                    ))}
                </Swiper>
            </View>
        );
    }

    renderDots() {
        return (
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ backgroundColor: 'gray', height: 10, width: 10, borderRadius: 50, marginRight: 8 }}></View>
                <View style={{ backgroundColor: '#D1D1D1', height: 10, width: 10, borderRadius: 50, marginRight: 8 }}></View>
                <View style={{ backgroundColor: '#D1D1D1', height: 10, width: 10, borderRadius: 50, marginRight: 8 }}></View>
            </View>
        )
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
                        Yours Next Ride ?
           </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', marginTop: 20 }}>
                    <Icon2 name={"settings"} size={25} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', marginTop: 20 }}>
                    <Icon name={"search1"} size={22} />
                </View>
            </View>
        )
    }
    renderSearch() {
        const { firstQuery } = this.state;
        return (
            <View style={{ padding: 10 }}>
                <Searchbar
                    
                    placeholder="Search your vehicle"
                    onChangeText={query => { this.setState({ firstQuery: query }); }}
                    value={firstQuery}
                    style={{ borderRadius: 5,height:40  }}
                />
            </View>
        )
    }
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
                    <View style={{ position: 'absolute', width: "100%" }}>
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
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ marginLeft: 10, flex: .7 }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ color: "gray", fontSize: 10 }}>{data.vehicle_title}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ color: "gray", fontSize: 10 }}>{data.mileage}</Text>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={{ color: "black", fontSize: 12, fontWeight: 'bold' }}>Price 1,148,500 $</Text>
                            </View>
                        </View>
                        <View style={{ marginRight: 10, flex: .3,justifyContent:'center' }}>
                            <View style={{ flexDirection: 'row',backgroundColor:"#949090",borderRadius:10 ,alignItems:'center',alignContent:'center',justifyContent:'center'}}>
                                <Text style={{ color: "white", fontSize: 12,alignSelf:'center',alignItems:'center' }}>See ALL</Text>
                            </View>
                        </View>
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


                    <KeyboardAvoidingView behavior="height" enabled>
                        {this.renderSearch()}
                    </KeyboardAvoidingView>
                    {this.renderSlider()}
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


const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})