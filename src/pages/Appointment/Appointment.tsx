import {SafeAreaView, View, Text ,Image, TouchableOpacity, ScrollView, ImageBackground} from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';



const Appointment = () => {

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userInformationReducer.user);

 

  return (

    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Header />
      <ScrollView style={{flex:1}}>
     
         <Text>Make appointment</Text>
        </ScrollView>
    </SafeAreaView>
    
    
  );
}

export default Appointment