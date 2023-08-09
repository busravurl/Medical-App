import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {wp} from '../utils/screenResize';


import Home from '../pages/Home/Home';
import Departments from '../pages/Departments/Departments';
import Doctors from '../pages/Doctors/Doctors';
import AboutUs from '../pages/AboutUs/AboutUs';
import Contacts from '../pages/Contacts/Contacts';




const Tab = createBottomTabNavigator();


const MainStack: React.FC = () => {
  return (<>
    
      <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions= {({route}) => ({
        headerShown:false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          alignItems: 'center',
          paddingBottom: wp(5),
          borderTopWidth: 0,
          
      },
        tabBarActiveTintColor: "#f22283",
        tabBarInactiveTintColor:"#333333"
      })}
      >
        
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Departments" component={Departments} />
        <Tab.Screen name="Doctors" component={Doctors} />
        <Tab.Screen name="AboutUs" component={AboutUs} />
        <Tab.Screen name="Contacts" component={Contacts} />

        
      </Tab.Navigator>
  
  </>);
};

export default MainStack;