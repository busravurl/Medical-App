import React, { useEffect, useState } from 'react';
import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
import doctorsList from "../DoctorsList.json"
import { wp } from '../utils/screenResize';
import * as All  from '../assets/icons';
import axios from 'axios';

const DoctorsCard = () => {

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


    const _renderDoctors = (item: any) => {
      const fullImageUrl = "https://almaestro.org/" + item.image;



        return (
          <View style={{marginBottom: wp(5)}}>
            <View key={item.id} style={{backgroundColor: '#f9f9f9',width: wp(55),alignItems: 'center',margin: wp(3), borderColor: '#1f3d9d', borderRadius: wp(1)}}>

            <View>
                <Image style={{width: wp(55),height: wp(60), resizeMode: 'contain',borderRadius: wp(1)}} source={{uri: fullImageUrl}} />
                <View style={{alignItems: 'center', margin: wp(4)}}>
                  <Text style={{fontWeight: 'bold', color:'#333333', marginBottom: wp(1) ,}}>{item.name}</Text>
                  <Text style={{fontWeight: 'bold', color:'#1f3d9d' ,fontSize: wp(6),fontFamily: 'Roboto', marginBottom: wp(5)}}>{item.Specialization}</Text>
                
                
                </View>
            </View>
            
            </View>
          </View>
        )
      }




    return(
        <View style={{flex:1}}>
          <FlatList
            horizontal
            data={doctors}
            renderItem={({item}) => _renderDoctors(item)}
          />
        </View>
    )

}

export default DoctorsCard