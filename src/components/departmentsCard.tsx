import React, { useEffect, useState } from 'react';
import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';

import departmentList from "../DepartmentsList.json"
import { wp } from '../utils/screenResize';
import * as All  from '../assets/icons';

const DepartmentsCard = () => {


    const _renderDepartments = (item) => {
        return (
          <View >
            <TouchableOpacity key={item.id} style={{width: wp(40),height: wp(50),alignItems: 'center',justifyContent: 'center',margin: wp(3), borderWidth: wp(0.3), borderColor: '#1f3d9d', borderRadius: wp(5)}}>

            <Image style={{width: wp(20),height: wp(20), resizeMode:'contain'}} source={All[`${item.image}`]} />
            <Text style={{fontWeight: 'bold', color:'#333333'}}>{item.name}</Text>
            <Text>All analyzes are carried out using modern equipment</Text>

            </TouchableOpacity>
          </View>
        )
      }




    return(
        <View style={{flex:1}}>
            
              <FlatList
                data={departmentList}
                renderItem={({item}) => _renderDepartments(item)}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{flexGrow: 1}}
                numColumns={2}
              />

            
            </View>
    )

}

export default DepartmentsCard