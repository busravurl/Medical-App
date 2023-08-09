import {SafeAreaView, View, Text ,Image, FlatList, TouchableOpacity, ScrollView, RefreshControl, TextInput} from 'react-native'
import React from 'react'
import Header from '../../components/header';
import MapView, { Marker } from 'react-native-maps';
import { wp } from '../../utils/screenResize';
import ContactForm from '../../components/contactForm';


const Contacts = () => {
  

  return (

    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Header />

      <ScrollView  automaticallyAdjustKeyboardInsets={true}>
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

      <View style={{backgroundColor:'#1f3d9d', width: wp(43) , height: wp(60),paddingLeft: wp(5),borderRadius: wp(2),  top: wp(-40), marginLeft: wp(2)}}>
        <Image 
            source={require('../../assets/target.png')} 
            style={{ width: wp(7), resizeMode:'contain'}}/>

        <Text style={{color:'#fff', fontSize: wp(3), fontWeight: 'bold'}}>1 800 456 78 90</Text>  
        <Text style={{color:'#fff', fontSize: wp(3), fontWeight: 'bold'}}>1 800 456 78 90</Text> 
        <Text style={{color:'#fff', fontSize: wp(2.8), marginTop: wp(3)}}>1560 Holden Street San Diego, CA 92139</Text> 
        <Text style={{color:'#fff', fontSize: wp(2.8), marginTop: wp(3)}}>inbox@.mediahelp.com</Text>

        <TouchableOpacity style={{ backgroundColor: '#f22283' ,width: wp(33), height: wp(10),marginTop: wp(3), borderRadius: wp(2), justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#ffffff',fontSize: wp(3), fontWeight: 'bold',padding: wp(1)}}>GET APPOINTMENT</Text>
        </TouchableOpacity>
      </View>


      <View style={{top: wp(-25), paddingLeft: wp(5)}}>
        <ContactForm />
      </View>
      </ScrollView>

    
    </SafeAreaView>
    
    
  );
}

export default Contacts