import React, { useState } from 'react';
import {Alert, ImageBackground, Text, TouchableOpacity, View} from 'react-native'
import { wp } from '../utils/screenResize';
import MakeAppointmentModal from '../modals/makeAppointmentModal';
import { useNavigation } from '@react-navigation/native';


const SliderHome = () => {
    const [inputModalVisible, setInputModalVisible] = useState(false);
    const navigation = useNavigation();
    const handleInputToggle =() =>{
        setInputModalVisible(!inputModalVisible);
    }
  
    return(
       <ImageBackground
          source={require('../assets/icon.png')}
          resizeMode='center'
          imageStyle={{backgroundColor:'#007bff', opacity: 0.3}}
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

            <TouchableOpacity 
            onPress={() => {navigation.navigate('Appointment')}}
            style={{ 
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
                <MakeAppointmentModal 
                      visible={inputModalVisible}
                      onClose={handleInputToggle}
                      onSend={() => Alert.alert('Send!')}
                    />
                </View>
       </ImageBackground>

    )
}

export default SliderHome