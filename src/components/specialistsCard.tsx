import React, { useEffect, useState } from "react";
import {View, FlatList, Text, TouchableOpacity, Alert} from 'react-native';
import { wp } from '../utils/screenResize';
import axios from "axios";
import MakeAppointmentModal from "../modals/makeAppointmentModal";

const SpecialistsCard = () => {

    useEffect(() => {
        getSpecialist()
      }, [])


    const [specialist, setspecialist] = useState([]);

    const getSpecialist = async () => {
    const apiUrl = 'https://almaestro.org/api/doctors'; 
    try {
      const response = await axios.post(apiUrl);
      setspecialist(response.data.data.doctors);
      console.log('specialist',specialist)
    } catch (error) {
      console.log(error);
    }
    };


    const [inputModalVisible, setInputModalVisible] = useState(false);

    const handleInputToggle =() =>{
        setInputModalVisible(!inputModalVisible);
    }
  

    const _renderSpecialists = (item) => {
        return (
          <View style={{margin: wp(3)}}>
            <View key={item.id} style={{backgroundColor: '#f9f9f9',height: '100%',alignItems: 'center', borderColor: '#1f3d9d', borderRadius: wp(3)}}>

            <View style={{flexDirection: 'row'}}>
                <View style={{ margin: wp(4)}}>
                  <Text style={{fontWeight: 'bold', color:'#333333', marginBottom: wp(1) ,fontSize: wp(6),margin:wp(1)}}>{item.name}</Text>
                  <View style={{flexDirection: 'row', margin: wp(1)}}>
                    <Text style={{fontWeight: 'bold'}}>Speciality: </Text>
                    <Text>{item.Specialization}</Text>
                  </View>
                  <View style={{flexDirection: 'row', margin: wp(1)}}>
                    <Text style={{fontWeight: 'bold'}}>Areas of Expertise: </Text>
                    <Text>Cardiovascular Surgery</Text>
                  </View>
                  <View style={{flexDirection: 'row', margin: wp(1)}}>
                    <Text style={{fontWeight: 'bold'}}>Years of Practise: </Text>
                    <Text>20 Years</Text>
                  </View>
                  <View style={{flexDirection: 'row', margin: wp(1)}}>
                    <Text style={{fontWeight: 'bold'}}>Working Time: </Text>
                    <Text>09:00am - 04:00pm</Text>
                  </View>
                  <View style={{flexDirection: 'row', margin: wp(1)}}>
                    <Text style={{fontWeight: 'bold'}}>Contacts: </Text>
                    <View>
                    <Text>+90 537 740 43 65</Text>
                    </View>
                  </View>

                  <TouchableOpacity 
                  onPress={handleInputToggle}
                  style={{
                        width: wp(37),
                        height: wp(10),
                        marginTop: wp(3),
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#f22283',
                        borderRadius: wp(1),
                        shadowColor: "#b2b2b2",
                        shadowOffset: {
                        width: 0,
                        height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,
                        elevation: 8 }}>
                        <Text style={{color: "white", fontSize: wp(3), fontWeight: "bold", paddingBottom: wp(1)}}>BOOK A VISIT </Text>
                    </TouchableOpacity>
                    <MakeAppointmentModal 
                      visible={inputModalVisible}
                      onClose={handleInputToggle}
                      onSend={() => Alert.alert('Send!')}
                    />
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
                data={specialist}
                renderItem={({item}) => _renderSpecialists(item)}
                keyExtractor={(item) => item.id.toString()}
              />

            
            </View>
    )
}

export default SpecialistsCard