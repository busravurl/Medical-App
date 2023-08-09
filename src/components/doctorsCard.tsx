import React, { useEffect, useState } from 'react';
import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import doctorsList from "../DoctorsList.json"
import { wp } from '../utils/screenResize';
import * as All  from '../assets/icons';

const DoctorsCard = () => {


    const _renderDoctors = (item) => {
        return (
          <View style={{marginBottom: wp(5)}}>
            <TouchableOpacity key={item.id} style={{backgroundColor: '#f9f9f9',width: wp(55),height: wp(125),alignItems: 'center',margin: wp(3), borderColor: '#1f3d9d', borderRadius: wp(1)}}>

            <View>
                <Image style={{width: wp(55),height: wp(60), resizeMode: 'cover',borderRadius: wp(1)}} source={require('../assets/specialist.jpg')} />
                <View style={{alignItems: 'center', margin: wp(4)}}>
                  <Text style={{fontWeight: 'bold', color:'#333333', marginBottom: wp(1) ,}}>{item.name}</Text>
                  <Text style={{fontWeight: 'bold', color:'#1f3d9d' ,fontSize: wp(6),fontFamily: 'Roboto', marginBottom: wp(5)}}>{item.department}</Text>
                
                  <Text style={{padding: wp(1)}}>Mon-Thu   08:00 - 18:00</Text>
                  <Text style={{padding: wp(1)}}>Friday        08:00 - 18:00</Text>
                  <Text style={{padding: wp(1)}}>Saturday   08:00 - 18:00</Text>
                </View>
            </View>

            <TouchableOpacity style={{
                width: wp(40),
                height: wp(10),
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#1f3d9d',
                borderRadius: wp(2),
                shadowColor: "#b2b2b2",
                shadowOffset: {
                width: 0,
                height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 8 }}>
                <Text style={{color: "white",fontWeight: "bold", paddingBottom: wp(1)}}>Booking a visit </Text>
                <Icon  name={"chevron-forward-outline"} size={wp(3.5)} color={'#ffffff'} />
            </TouchableOpacity>
            
            </TouchableOpacity>
          </View>
        )
      }




    return(
        <View style={{flex:1}}>
            
              <FlatList
                horizontal
                data={doctorsList}
                renderItem={({item}) => _renderDoctors(item)}
                keyExtractor={(item) => item.id.toString()}
              />

            
            </View>
    )

}

export default DoctorsCard