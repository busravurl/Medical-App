import {SafeAreaView, View, Text ,Image, FlatList, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header';

import { wp } from '../../utils/screenResize';
import axios from 'axios';


const Departments = () => {

  useEffect(() => {
    getSpecializations()
  }, [])


  const [specializations, setSpecializations] = useState([]);

  const getSpecializations = async () => {
  const apiUrl = 'https://almaestro.org/api/specializations'; 
  try {
    const response = await axios.post(apiUrl);
    setSpecializations(response.data.data.Specializations);
    console.log('specializationsyrghfjfjhg',specializations)
  } catch (error) {
    console.log(error);
  }
  };


  const _renderDepartments = (item: any) => {

    const fullImageUrl = "https://almaestro.org/" + item.icon;
      //console.log(fullImageUrl);
    return (
      <View >
        <View key={item.id} style={{flexDirection: 'row',width: '90%',alignItems: 'center',justifyContent: 'center',margin: wp(3), borderWidth: wp(0.3), borderColor: '#d8d8d8', borderRadius: wp(2)}}>

        <Image style={{width: '20%',height: '100%', resizeMode: 'center',marginLeft: wp(2)}} source={{uri: fullImageUrl}} />
        <View style={{width: '80%'}}>
        <Text style={{fontSize: wp(9),fontWeight: 'bold', color:'#d8d8d8', marginLeft: wp(3)}}>{item.name}</Text>
        <Text style={{fontWeight: 'bold',fontSize: wp(7),marginTop: wp(-5), color:'#1f3d9d', marginLeft: wp(5)}}>{item.name}</Text>
        <Text style={{color: '#7b7b7b',marginLeft: wp(5), paddingBottom: wp(3)}}>{item.description}</Text>
        
        </View>
        
        </View>
      </View>
    )
  }


  return (

    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Header />
      <ScrollView>
      <View style={{flex:1, flexDirection:'row', justifyContent: 'center', marginTop: wp(7)}}>
        <Text style={{color: '#f22283',fontSize: wp(6), fontWeight: 'bold',}}>OUR</Text>
        <Text style={{color: '#1f3d9d',fontSize: wp(6), fontWeight: 'bold',}}> DEPARTMENTS</Text>
      </View>
      <View style={{flexDirection: 'row',justifyContent: 'center'}}>
        <Text style={{color: '#1f3d9d',fontSize: wp(5),alignSelf: 'center'}}>Home</Text>
        <Text style={{color: '#333333',fontSize: wp(5),alignSelf: 'center'}}>/ All Departments</Text>
      </View>
    
      <FlatList
        data={specializations}
        renderItem={({item}) => _renderDepartments(item)}
        numColumns={1}
      />
      </ScrollView>
    </SafeAreaView>
    
    
  );
}

export default Departments