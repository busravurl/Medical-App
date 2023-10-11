import React from "react";
import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import specialistsList from "../SpecialistsList.json"
import { wp } from '../utils/screenResize';
import { useNavigation } from "@react-navigation/native";

const SpecialistsCard = () => {
  
  const navigation = useNavigation();

    const _renderSpecialists = (item) => {
        return (
          <View style={{margin: wp(3)}}>
            <View key={item.id} style={{backgroundColor: '#f9f9f9',width: '90%',height: '100%',alignItems: 'center', borderColor: '#1f3d9d', borderRadius: wp(3)}}>

            <View style={{flexDirection: 'row'}}>
                <Image style={{width: '30%',height: '100%', resizeMode: 'center', backgroundColor: '#f2f2f2'}} source={require('../assets/icon.png')} />
                <View style={{ margin: wp(4)}}>
                  <Text style={{fontWeight: 'bold', color:'#333333', marginBottom: wp(1) ,fontSize: wp(6),margin:wp(1)}}>{item.name}</Text>
                  <View style={{flexDirection: 'row', margin: wp(1)}}>
                    <Text style={{fontWeight: 'bold'}}>Speciality: </Text>
                    <Text>{item.speciality}</Text>
                  </View>
                  <View style={{flexDirection: 'row', margin: wp(1)}}>
                    <Text style={{fontWeight: 'bold'}}>Areas of Expertise: </Text>
                    <Text>{item.ExpertiseAreas}</Text>
                  </View>
                  <View style={{flexDirection: 'row', margin: wp(1)}}>
                    <Text style={{fontWeight: 'bold'}}>Years of Practise: </Text>
                    <Text>{item.PractiseYears}</Text>
                  </View>
                  <View style={{flexDirection: 'row', margin: wp(1)}}>
                    <Text style={{fontWeight: 'bold'}}>Working Time: </Text>
                    <Text>{item.ExpertiseAreas}</Text>
                  </View>
                  <View style={{flexDirection: 'row', margin: wp(1),marginBottom: wp(3)}}>
                    <Text style={{fontWeight: 'bold'}}>Contacts: </Text>
                    <View>
                    <Text>+1 123 456 44 66</Text>
                    {/* <View style={{flexDirection: 'row', margin: wp(1)}}>
                    <Icon name={"logo-facebook"} size={wp(5)} color={'#333333'} />
                    <Icon name={"logo-twitter"} size={wp(5)} color={'#333333'} />
                    <Icon name={"logo-instagram"} size={wp(5)} color={'#333333'} /></View> */}
                    </View>
                  </View>

                  <TouchableOpacity 
                  onPress={() => {navigation.navigate('Appointment')}}
                  style={{
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
                data={specialistsList}
                renderItem={({item}) => _renderSpecialists(item)}
                keyExtractor={(item) => item.id.toString()}
              />


            </View>
    )
}

export default SpecialistsCard
