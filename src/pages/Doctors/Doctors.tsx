import {SafeAreaView, View, Text ,Image, FlatList, TouchableOpacity, ScrollView, RefreshControl} from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header';
import Icon from 'react-native-vector-icons/Ionicons'
import { wp } from '../../utils/screenResize';
import doctorsList from "../../DoctorsList.json"
import axios from 'axios';


const Doctors = () => {

   useEffect(() => {
        getDoctors()
      }, [])
    

  const [doctors, setDoctors] = useState([]);

  const getDoctors = async () => {
    const apiUrl = 'https://almaestro.org/api/doctors'; 
    try {
      const response = await axios.post(apiUrl);
      setDoctors(response.data.data.doctors);
      console.log('doctors',doctors)
    } catch (error) {
      console.log(error);
    }
  };
   

  const _renderDoctors = (item) => {
    return (
      <View style={{marginBottom: wp(5), alignItems: 'center',marginTop: wp(5)}}>
        <View key={item.id} style={{backgroundColor: '#fff',width: '80%',alignItems: 'center',margin: wp(3),borderWidth: wp(0.2), borderColor: '#b2b2b2', borderRadius: wp(2)}}>

        <View>
            {/* <View style={{alignItems: 'center',padding: wp(10)}}><Icon name={"person"} size={wp(30)} color={'#ebebeb'} /></View> */}
            <Image style={{width: wp(80),height: wp(80), resizeMode: 'cover',borderRadius: wp(1)}} source={require('../../assets/specialist.jpg')} />
            <View style={{ margin: wp(4), alignItems: 'flex-start'}}>
              <Text style={{fontWeight: 'bold', color:'#333333', marginBottom: wp(1),marginTop: wp(3) ,fontFamily: 'Roboto',fontSize: wp(5)}}>{item.name}</Text>
              <Text style={{color: '#7b7b7b',fontFamily: 'Roboto', marginBottom: wp(5)}}>{item.Specialization}</Text>
              <View style={{borderWidth:wp(0.1), width: wp(70),marginBottom: wp(5)}}/>
              <Text style={{color: '#7b7b7b',fontFamily: 'Roboto', marginBottom: wp(2)}}>{item.email}</Text>
              <Text style={{color: '#7b7b7b',fontFamily: 'Roboto', marginBottom: wp(2)}}>{item.phone}</Text>
              <Text style={{color: '#7b7b7b', width: wp(65), marginTop: wp(1)}}>{item.bio}</Text>
             
            </View>
        </View>
        </View>
      </View>
    )
  }


  return (

    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Header />
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: wp(10)}}>
          <Text style={{color: '#f22283', fontSize: wp(5), marginLeft: wp(3)}}>All Doctors</Text>
        </View>

        <FlatList
                data={doctors}
                renderItem={({item}) => _renderDoctors(item)}
                keyExtractor={(item) => item.id.toString()}
              />
      </ScrollView>
    
    </SafeAreaView>
    
    
  );
}

export default Doctors