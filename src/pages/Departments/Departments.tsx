import {SafeAreaView, View, Text ,Image, FlatList, TouchableOpacity, ScrollView, RefreshControl} from 'react-native'
import React from 'react'
import Header from '../../components/header';

import departmentList from "../../DepartmentsList.json"
import { wp } from '../../utils/screenResize';


const Departments = () => {

  const _renderDepartments = (item) => {
    return (
      <View >
        <TouchableOpacity key={item.id} style={{flexDirection: 'row',width: '90%',alignItems: 'center',justifyContent: 'center',margin: wp(3), borderWidth: wp(0.3), borderColor: '#d8d8d8', borderRadius: wp(2)}}>

        <Image style={{width: '30%',height: '100%', resizeMode:'cover'}} source={require('../../assets/department.jpg')} />
        <View style={{width: '70%'}}>
        <Text style={{fontSize: wp(11),fontWeight: 'bold', color:'#d8d8d8'}}>{item.name}</Text>
        <Text style={{fontWeight: 'bold',fontSize: wp(7),marginTop: wp(-5), color:'#1f3d9d', marginLeft: wp(5)}}>{item.name}</Text>
        <Text style={{marginLeft: wp(5)}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <Text style={{fontWeight: 'bold', color:'#1f3d9d', margin: wp(5)}}>R E A D  M O R E</Text>
        </View>

        </TouchableOpacity>
      </View>
    )
  }


  return (

    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Header />
      <View style={{flex:1, flexDirection:'row', justifyContent: 'center', marginTop: wp(7)}}>
        <Text style={{color: '#f22283',fontSize: wp(6), fontWeight: 'bold',}}>OUR</Text>
        <Text style={{color: '#1f3d9d',fontSize: wp(6), fontWeight: 'bold',}}> DEPARTMENTS</Text>
      </View>
      <View style={{flexDirection: 'row',justifyContent: 'center'}}>
        <Text style={{color: '#1f3d9d',fontSize: wp(5),alignSelf: 'center'}}>Home</Text>
        <Text style={{color: '#333333',fontSize: wp(5),alignSelf: 'center'}}>/ All Departments</Text>
      </View>
    
      <FlatList
        data={departmentList}
        renderItem={({item}) => _renderDepartments(item)}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
      />
    </SafeAreaView>
    
    
  );
}

export default Departments