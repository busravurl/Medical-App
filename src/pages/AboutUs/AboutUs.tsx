import {SafeAreaView, View, Text ,Image, TouchableOpacity, ScrollView, ImageBackground} from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../../components/header';
import { wp } from '../../utils/screenResize';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import MakeAppointmentModal from '../../modals/makeAppointmentModal';



const AboutUs = () => {
  useEffect(() => {
    getSettings()
  }, [])


  const [settings, setSettings] = useState([]);
  const [inputModalVisible, setInputModalVisible] = useState(false);

  const handleInputToggle =() =>{
      setInputModalVisible(!inputModalVisible);
  }

  const getSettings = async () => {
  const apiUrl = 'https://almaestro.org/api/settings'; 
  try {
    const response = await axios.post(apiUrl);
    setSettings(response.data.data);
    console.log('settings',settings)
  } catch (error) {
    console.log(error);
  }
  };

  return (

    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Header />
      <ScrollView style={{flex:1}}>
      <View>
      <MapView
            region={{
              latitude: 32.715736,
              longitude: -117.161087,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={{height: wp(90), width: '100%', borderRadius: 20}}>
                <Marker
                    draggable={false}
                    coordinate={{
                    latitude: 32.715736,
                    longitude: -117.161087,
                    }}
                    pinColor={'#ff559d'}
                />
        </MapView>
      </View>

        <View style={{backgroundColor:'#1f3d9d', width: wp(43), paddingBottom: wp(4),paddingLeft: wp(5),borderRadius: wp(2),  top: wp(-40), marginLeft: wp(2)}}>
          <Image 
              source={require('../../assets/target.png')} 
              style={{ width: wp(7), resizeMode:'contain'}}/>

          <Text style={{color:'#fff', fontSize: wp(3), fontWeight: 'bold'}}>{settings.phone}</Text>  
          <Text style={{color:'#fff', fontSize: wp(3), fontWeight: 'bold', marginTop: wp(2)}}>{settings.hour}</Text> 
          <Text style={{color:'#fff', fontSize: wp(2.8), marginTop: wp(3)}}>{settings.address}  {settings.city}</Text> 
          <Text style={{color:'#fff', fontSize: wp(2.8), marginTop: wp(3)}}>{settings.email}</Text>

          <TouchableOpacity onPress={handleInputToggle} style={{ backgroundColor: '#f22283' ,width: wp(33), height: wp(10),marginTop: wp(3), borderRadius: wp(2), justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#ffffff',fontSize: wp(3), fontWeight: 'bold',padding: wp(1)}}>GET APPOINTMENT</Text>
          </TouchableOpacity>
          
          <MakeAppointmentModal 
            visible={inputModalVisible}
            onClose={handleInputToggle}
            onSend={() => Alert.alert('Send!')}
          />
        </View>
                  
        <View style={{ top: wp(-30), margin: wp(2)}}>
        <View style={{flex:1, flexDirection:'row', justifyContent: 'center', marginTop: wp(7),marginBottom: wp(3)}}>
              <Text style={{color: '#f22283',fontSize: wp(6), fontWeight: 'bold',}}>ABOUT</Text>
              <Text style={{color: '#1f3d9d',fontSize: wp(6), fontWeight: 'bold',}}> US</Text>
            </View>
          <View style={{flexDirection: 'row',height: wp(90)}}>
                <View style={{ padding: wp(2)}}>
                    <ImageBackground source={require('../../assets/about-img.jpg')} resizeMode="cover" style={{ height: '100%',borderRadius: wp(20)}}>
                        
                          <TouchableOpacity style={{backgroundColor: '#f22283',width: wp(40), height: wp(15),padding: wp(2),borderRadius: wp(10), transform: [{translateX: -20}], top: wp(60), marginLeft: wp(3), justifyContent: 'center'}}>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                            <View style={{width:wp(12), height: wp(12), borderRadius: wp(50), backgroundColor: '#ffffff',alignItems: 'center', justifyContent: 'center'}}>
                            <Icon  name={"play"} size={wp(7)} color={'#f22283'} /></View> 
                            <Text style={{color: '#ffffff',fontSize: wp(3.5), fontWeight: 'bold', alignSelf: 'center' }}>Watch Video</Text>
                            </View>
                          </TouchableOpacity>
                        
                    </ImageBackground>
                    
                </View>

                <View style={{width: wp(45), margin: wp(2)}}>
                    <Text>W H O  W E  A R E</Text>
                    <Text style={{color: '#f22283',fontSize: wp(5), fontWeight: 'bold'}}>MEDICAL CENTER</Text>
                    <Text style={{color: '#1f3d9d',fontSize: wp(5), fontWeight: 'bold', paddingBottom: wp(1)}}>IN NEW YORK</Text>
                    <Text style={{color: '#333333', fontSize: wp(4), fontWeight: 'bold', paddingRight: wp(1)}}>We offer reasonable pricing health  plans,insurance packages to clients.</Text>
                    <Text style={{paddingRight: wp(1), marginTop: wp(1)}}>MEDIHELP Medical Center provide patients with choices to ask for the conducting and analyzing of several lab tests on-site at no cost for prioritized patients or at 70% for people with an insurance.</Text>
                </View>

                

            </View>
        <View style={{margin: wp(3)}}>
        <Text >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volu ptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </Text>
        <Text >Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</Text>
      
        </View>
        
        <View style={{flexDirection:'row', marginTop: wp(5),paddingLeft:wp(3)}}>
          <Image source={require('../../assets/medical-center-2.jpg')} style={{ width: wp(45),height: wp(45),resizeMode:'cover',flexShrink:1}}/>
          <View style={{flexShrink: 2, marginLeft: wp(2)}}>
              <Text style={{color: '#f22283',fontSize: wp(5), fontWeight: 'bold'}}>WE ARE THE BEST</Text>
              <Text style={{color: '#1f3d9d',fontSize: wp(5), fontWeight: 'bold', paddingBottom: wp(1)}}>MEDICAL CENTER</Text>
              <Text style={{fontSize: wp(4), paddingRight: wp(1)}}>Led by the joint care coordinator, our team has been hand-picked for their positive attitudes, motivational skills and a desire to provide outstanding service</Text>
          </View>
        </View>

        <View  style={{alignItems: 'center', marginTop: wp(2)}}>
            <View style={{flexDirection: 'row'}}>
            <Icon  name={"checkmark"} size={wp(7)} color={'#333333'} />
            <Text style={{color: '#333333',fontSize: wp(4.5), fontWeight: 'bold', alignSelf: 'center' }}>Free Ambulance Transport</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Icon  name={"checkmark"} size={wp(7)} color={'#333333'} />
            <Text style={{color: '#333333',fontSize: wp(4.5), fontWeight: 'bold', alignSelf: 'center' }}>FLeading Technology          </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Icon  name={"checkmark"} size={wp(7)} color={'#333333'} />
            <Text style={{color: '#333333',fontSize: wp(4.5), fontWeight: 'bold', alignSelf: 'center' }}>Highly Qualified Doctors    </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
            <Icon  name={"checkmark"} size={wp(7)} color={'#333333'} />
            <Text style={{color: '#333333',fontSize: wp(4.5), fontWeight: 'bold', alignSelf: 'center' }}>Patient CenteredCare          </Text>
            </View>
        </View>
        
       
        </View>
        
        </ScrollView>
    </SafeAreaView>
    
    
  );
}

export default AboutUs