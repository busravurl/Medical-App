import {SafeAreaView, View, Text ,Image, TouchableOpacity, ScrollView, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import axios from 'axios';
import { wp } from '../../utils/screenResize';
import { useNavigation } from '@react-navigation/native';



const Appointment = () => {

  
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const user = useSelector((state: RootState) => state.userInformationReducer.user);

  const isLoggedIn = useSelector((state: RootState) => state.userInformationReducer.isLoggedIn);


 
  useEffect(() => {
    setRefreshing(true)
    getSpecializations()
    setRefreshing(false)
  }, [])


  const [specializations, setSpecializations] = useState([]);

  const getSpecializations = async () => {
    const apiUrl = 'https://almaestro.org/api/specializations'; 
    try {
      const response = await axios.post(apiUrl);
      setSpecializations(response.data.data.Specializations);
      console.log('specializations',specializations)
    } catch (error) {
      console.log(error);
    }
  };


  const _renderDepartments = (item) => {

      return (
        <View >
          <TouchableOpacity key={item.id} style={{width: wp(40),justifyContent: 'center',padding: wp(3),marginLeft: wp(2), borderWidth: wp(0.2)}}>

          {/* <Image style={{width: wp(20),height: wp(20), resizeMode:'contain'}} source={{uri: fullImageUrl}} /> */}
          <Text style={{fontWeight: 'bold', color:'#333333'}}>{item.name}</Text>

          </TouchableOpacity>
        </View>
      )
  }

  return (

    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Header />
      <ScrollView style={{flex:1}}>
        {isLoggedIn ? <View>
            <View style={{height: 100}}>
            <Text style={{fontWeight: 'bold'}}>make an appointment</Text>
            </View>
            <View >
            <Text style={{fontWeight: 'bold'}}>Specialization</Text>
            <FlatList
                data={specializations}
                renderItem={({item}) => _renderDepartments(item)}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{flexGrow: 1}}
                
              />
            </View>
            <View style={{height: 100}}>
            <Text style={{fontWeight: 'bold'}}>doctors</Text>
            </View>
            <View style={{height: 100}}>
            <Text style={{fontWeight: 'bold'}}>select a date</Text>
            </View>
        </View> : <View style ={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={{marginTop: wp(100)}}><Image 
                source={require('../../assets/icon.png')} 
                style={{ marginLeft: wp(2), width: wp(30), resizeMode:'center'}}/></View>
        <Text style={{color: '#b2b2b2',fontSize: wp(4),alignSelf: 'center'}}>Please login to make an appointment</Text>
        <TouchableOpacity
          style={{
            borderColor: '#1f3d9d',
            borderWidth: wp(0.1),
            margin: wp(3),
            width:'50%', 
            height: wp(12),
            borderRadius: 20 ,
            alignItems: 'center',
            justifyContent: 'center'}}
          onPress={() => {navigation.navigate('LoginPage')}}><Text style={{fontSize: wp(5)}}>Go To Login</Text></TouchableOpacity></View>}
        </ScrollView>
    </SafeAreaView>
    
    
  );
}

export default Appointment