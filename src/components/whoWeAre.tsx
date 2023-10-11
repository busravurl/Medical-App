import React from "react";
import { Image, ImageBackground, View, Text, TouchableOpacity } from "react-native";
import { wp } from "../utils/screenResize";
import { useNavigation } from "@react-navigation/native";



const WhoWeAre = () => {

    const navigation = useNavigation();

    return (
        <View style={{flexDirection: 'row', marginTop:wp(5)}}>
            <View style={{width: wp(40) ,height: wp(100), margin: wp(2)}}>
                <ImageBackground source={require('../assets/icon.png')} resizeMode="center" style={{width: '100%' ,height: '100%',borderRadius: wp(2), backgroundColor: '#f4f4f4'}}>
                    <View style={{backgroundColor:'#1f3d9d', width: wp(40) , height: wp(40),paddingLeft: wp(5),borderRadius: wp(2), transform: [{translateX: -25}], top: wp(56), marginLeft: wp(3)}}>
                    <Image 
                        source={require('../assets/target.png')} 
                        style={{ width: wp(7), resizeMode:'contain'}}/>
            
                    <Text style={{color:'#fff', fontSize: wp(3), fontWeight: 'bold'}}>OUR MISSION</Text>  
                    <Text style={{color:'#fff', fontSize: wp(2.8)}}>Our mission is to care for patients, families, communities, and one another</Text> 
                  </View>
                </ImageBackground>
                
            </View>

            <View style={{width: wp(45), margin: wp(2)}}>
                <Text>W H O  W E  A R E</Text>
                <Text style={{color: '#f22283',fontSize: wp(5), fontWeight: 'bold'}}>MEDICAL CENTER</Text>
                <Text style={{color: '#1f3d9d',fontSize: wp(5), fontWeight: 'bold', paddingBottom: wp(1)}}>IN NEW YORK</Text>
                <Text style={{color: '#333333', fontSize: wp(4), fontWeight: 'bold', paddingRight: wp(1)}}>We offer reasonable pricing health  plans,insurance packages to clients.</Text>
                <Text style={{paddingRight: wp(1), marginTop: wp(1)}}>IBNSINO Medical Center provide patients with choices to ask for the
                    conducting and analyzing of several lab tests on-site at no cost for
                    prioritized patients or at 70% for people with an insurance.</Text>

                <TouchableOpacity onPress={() => {navigation.navigate('About Us')}}>
                <Text style={{color: '#1f3d9d',fontSize: wp(3), fontWeight: 'bold', fontFamily: 'Roboto', paddingTop: wp(2)}}>R E A D  M O R E</Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image 
                        source={require('../assets/signature.png')} 
                        style={{ width: wp(15), resizeMode:'contain'}}/>

                <View style={{paddingLeft: wp(2)}}>
                    <Text style={{fontSize: wp(3), fontWeight: 'bold'}}>Richard Jefferson</Text>
                    <Text style={{fontSize: wp(3)}}>Chief Medical Center</Text>
                </View>
            
                </View>
            </View>

        </View>
    )
}

export default WhoWeAre