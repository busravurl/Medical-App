import React from "react";
import {View, Image, TouchableOpacity, Text} from "react-native";
import { wp } from "../utils/screenResize";
import Icon from 'react-native-vector-icons/Ionicons'

const Header =() => {
    return (
        <View style={{height: wp(33), shadowColor: "#b2b2b2",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 8}}>
           
            <View style={{ height: wp(17),backgroundColor: '#1f3d9d'}}> 
                <Image 
                source={require('../assets/footer-logo.png')} 
                style={{ marginLeft: wp(2), width: wp(30), resizeMode:'contain'}}/>
            </View>
            <View style={{paddingLeft: wp(2),flex:1,flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',backgroundColor: '#ffffff'}}>
            <Icon name={"cart-outline"} size={wp(7)} color={'#333333'} />
            <TouchableOpacity style={{ backgroundColor: '#f22283' ,width: wp(40), height: wp(12), marginRight: wp(2), borderRadius: wp(2), justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: '#ffffff',fontSize: wp(3), fontWeight: 'bold',padding: wp(1)}}>MAKE AN APPOINTMENT</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header