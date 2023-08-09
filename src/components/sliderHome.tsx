import React from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native'
import { wp } from '../utils/screenResize';


const SliderHome = () => {
    return(
       <ImageBackground
          source={require('../assets/department.jpg')}
          imageStyle={{backgroundColor:'#007bff', opacity: 0.5}}
          style={{aspectRatio: 1.7}}>
         <View style={{borderRadius: wp(2),margin: wp(2), paddingBottom: wp(2), alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: '#ffffff',fontSize: wp(3),margin: wp(3)}}>W E L C O M E</Text>
            <View style={{flexDirection:'row'}}>
                <Text style={{color: '#ffffff',fontSize: wp(5), fontWeight: 'bold'}}>MULTIDISCIPLINARY </Text>
                <Text style={{color: '#f22283',fontSize: wp(5), fontWeight: 'bold'}}>MEDICAL</Text>
            </View>
            <View style={{flexDirection:'row'}}>
                <Text style={{color: '#f22283',fontSize: wp(5), fontWeight: 'bold'}}>CENTER </Text>
                <Text style={{color: '#ffffff',fontSize: wp(5), fontWeight: 'bold'}}>IN NEW YORK</Text>
            </View>
            <Text style={{color: '#ffffff',fontSize: wp(4), margin:wp(3)}}>30% discount on full examination</Text>

            <TouchableOpacity style={{ 
                    backgroundColor: '#f22283' ,width: wp(43), height: wp(13),margin: wp(3), borderRadius: wp(1), justifyContent: 'center', alignItems: 'center',
                    shadowColor: "#f22283",
                    shadowOffset: {
                    width: 0,
                    height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 6 }}>
                    <Text style={{color: '#ffffff',fontSize: wp(3), fontWeight: 'bold',padding: wp(1)}}>BOOK A CONSULTATION</Text>
                </TouchableOpacity>
            </View>
       </ImageBackground>

    )
}

export default SliderHome