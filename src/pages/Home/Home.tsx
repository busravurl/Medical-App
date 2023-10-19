import {SafeAreaView, View, Text , ScrollView} from 'react-native'
import React from 'react'

import Header from '../../components/header'
import SliderHome from '../../components/sliderHome';
import { wp } from '../../utils/screenResize';
import DepartmentsCard from '../../components/departmentsCard';
import DoctorsCard from '../../components/doctorsCard';
import WhoWeAre from '../../components/whoWeAre';
import SpecialistsCard from '../../components/specialistsCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


const Home = () => {

 const user = useSelector((state: RootState) => state.userInformationReducer.user);

  return (

    <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Header />
      <ScrollView style={{flex:1}}>
        <SliderHome />
            
        <View style={{alignItems: 'center'}}>

            <View style={{ flexDirection:'row', justifyContent: 'center', marginTop: wp(7)}}>
                <Text style={{color: '#f22283',fontSize: wp(6), fontWeight: 'bold',}}>OUR</Text>
                <Text style={{color: '#1f3d9d',fontSize: wp(6), fontWeight: 'bold',}}> DEPARTMENTS</Text>
                
            </View>

            <DepartmentsCard />

            
            <View style={{flex:1, flexDirection:'row', justifyContent: 'center', marginTop: wp(7)}}>
              <Text style={{color: '#f22283',fontSize: wp(6), fontWeight: 'bold',}}>OUR</Text>
              <Text style={{color: '#1f3d9d',fontSize: wp(6), fontWeight: 'bold',}}> DOCTORS</Text>
            </View>
            <Text style={{color: '#b2b2b2',fontSize: wp(5),alignSelf: 'center'}}>Meet our team</Text>
            <DoctorsCard />

            <WhoWeAre />

            <View style={{flex:1, flexDirection:'row', justifyContent: 'center', marginTop: wp(7)}}>
              <Text style={{color: '#f22283',fontSize: wp(6), fontWeight: 'bold',}}>OUR</Text>
              <Text style={{color: '#1f3d9d',fontSize: wp(6), fontWeight: 'bold',}}> SPECIALISTS</Text>
            </View>
            <SpecialistsCard />
        </View>
      
      </ScrollView>
      
    </SafeAreaView>
    
    
  );
}

export default Home