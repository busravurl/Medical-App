import React, { useEffect, useState } from 'react';
import {View, FlatList, Text, Image} from 'react-native';

//import departmentList from "../DepartmentsList.json"
import { wp } from '../utils/screenResize';
//import * as All  from '../assets/icons';
import axios from 'axios';

const DepartmentsCard = () => {

  useEffect(() => {
    getSpecializations()
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

      const fullImageUrl = "https://almaestro.org/" + item.image;
      //console.log(fullImageUrl);
  
  

        return (
          <View >
            <View key={item.id} style={{width: wp(40),alignItems: 'center',justifyContent: 'center',margin: wp(3),padding: wp(3), borderWidth: wp(0.3), borderColor: '#1f3d9d', borderRadius: wp(5)}}>

            <Image style={{width: wp(20),height: wp(20), resizeMode:'contain'}} source={{uri: fullImageUrl}} />
            <Text style={{fontWeight: 'bold', color:'#333333'}}>{item.name}</Text>
            <Text style={{color: '#7b7b7b'}}>{item.description}</Text>

            </View>
          </View>
        )
      }




    return(
        <View style={{flex:1}}>     
          <FlatList
            data={specializations}
            renderItem={({item}) => _renderDepartments(item)}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{flexGrow: 1}}
            numColumns={2}
          />
        </View>
    )

}

export default DepartmentsCard