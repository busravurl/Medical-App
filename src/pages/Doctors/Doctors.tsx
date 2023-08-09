import {SafeAreaView, View, Text ,Image, FlatList, TouchableOpacity, ScrollView, RefreshControl} from 'react-native'
import React from 'react'
import Header from '../../components/header';
import Icon from 'react-native-vector-icons/Ionicons'
import { wp } from '../../utils/screenResize';
import doctorsList from "../../DoctorsList.json"


const Doctors = () => {

  const _renderDoctors = (item) => {
    return (
      <View style={{marginBottom: wp(5), alignItems: 'center'}}>
        <TouchableOpacity key={item.id} style={{backgroundColor: '#f9f9f9',width: '80%',alignItems: 'center',margin: wp(3),borderWidth: wp(0.1), borderColor: '#d8d8d8', borderRadius: wp(1)}}>

        <View>
            <Image style={{width: wp(80),height: wp(80), resizeMode: 'cover',borderRadius: wp(1)}} source={require('../../assets/specialist.jpg')} />
            <View style={{ margin: wp(4), alignItems: 'flex-start'}}>
              <Text style={{fontWeight: 'bold', color:'#333333', marginBottom: wp(1) ,fontFamily: 'Roboto',fontSize: wp(5)}}>{item.name}</Text>
              <Text style={{fontFamily: 'Roboto', marginBottom: wp(5)}}>{item.department}</Text>
              <View style={{borderWidth:wp(0.1), width: wp(70)}}/>
            
              <Text style={{padding: wp(1), width: wp(65), marginTop: wp(3)}}>Dr. Will Marvin is an internist in Roshester MN, and has been in practise between 8-10 years.</Text>
             <View style={{flexDirection: 'row',marginTop: wp(3)}}>
                  <Icon name={"logo-facebook"} size={wp(6)} color={'#333333'} style={{marginRight: wp(2)}}/>
                  <Icon name={"logo-twitter"} size={wp(6)} color={'#333333'} style={{marginRight: wp(2)}} />
                  <Icon name={"logo-instagram"} size={wp(6)} color={'#333333'} style={{marginRight: wp(2)}}/>
                  <Icon name={"share-social"} size={wp(6)} color={'#333333'} style={{marginRight: wp(2)}}/>
             </View>
            </View>
        </View>
        </TouchableOpacity>
      </View>
    )
  }


  return (

    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Header />
      <ScrollView>
        <View style={{flexDirection: 'row',margin: wp(2), marginTop: wp(5)}}>
          <Text style={{color: '#f22283', fontSize: wp(3.3), marginLeft: wp(3)}}>All Doctors</Text>
          <Text style={{color: '#333333', fontSize: wp(3.3), marginLeft: wp(3)}}> Dentists</Text>
          <Text style={{color: '#333333', fontSize: wp(3.3), marginLeft: wp(3)}}> Surgery</Text>
          <Text style={{color: '#333333', fontSize: wp(3.3), marginLeft: wp(3)}}> Cardiology</Text>
          <Text style={{color: '#333333', fontSize: wp(3.3), marginLeft: wp(3)}}> Neurology</Text>
        </View>

        <FlatList
                data={doctorsList}
                renderItem={({item}) => _renderDoctors(item)}
                keyExtractor={(item) => item.id.toString()}
              />
      </ScrollView>
    
    </SafeAreaView>
    
    
  );
}

export default Doctors