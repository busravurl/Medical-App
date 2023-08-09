import {SafeAreaView, View, Text ,Image, FlatList, TouchableOpacity, ScrollView, RefreshControl, ImageBackground} from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../../components/header';
import WhoWeAre from '../../components/whoWeAre';
import { wp } from '../../utils/screenResize';
import DoctorsCard from '../../components/doctorsCard';


const AboutUs = () => {

  return (

    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Header />
      <ScrollView style={{flex:1, margin:wp(2)}}>
          <View style={{flexDirection: 'row', marginTop:wp(5),height: wp(90)}}>
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
        
        <View style={{flex:1, flexDirection:'row', justifyContent: 'center', marginTop: wp(7)}}>
              <Text style={{color: '#f22283',fontSize: wp(6), fontWeight: 'bold',}}>OUR</Text>
              <Text style={{color: '#1f3d9d',fontSize: wp(6), fontWeight: 'bold',}}> DOCTORS</Text>
            </View>
            <Text style={{color: '#b2b2b2',fontSize: wp(5),alignSelf: 'center'}}>Meet our team</Text>
            <DoctorsCard />
        
        </ScrollView>
    </SafeAreaView>
    
    
  );
}

export default AboutUs