import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {wp} from '../utils/screenResize';
import Icon from 'react-native-vector-icons/Feather'

import Home from '../pages/Home/Home';
import Departments from '../pages/Departments/Departments';
import Doctors from '../pages/Doctors/Doctors';
import AboutUs from '../pages/AboutUs/AboutUs';
import Appointment from '../pages/Appointment/Appointment';




const Tab = createBottomTabNavigator();


const MainStack: React.FC = () => {
  return (<>
    
      <Tab.Navigator
      initialRouteName="Home"
      screenOptions= {({route}) => ({
        headerShown:false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          alignItems: 'center',
          borderTopWidth: 0,
          
      },tabBarIcon: ({ focused, color, size}) =>  {
        let iconName;
        let rn = route.name;

        if ( rn === "Home") {
          iconName = 'home';
        
        }else if (rn === "Departments") {
            iconName = 'list' ;
        }else if (rn === "Doctors") {
          iconName = 'users' ;
        }else if (rn === "About Us") {
          iconName = 'target' ;
        }else if (rn === "Appointment") {
          iconName = 'book' ;
        }

        return <Icon name={iconName} size={17} color={color}/>
      },
        tabBarActiveTintColor: "#f22283",
        tabBarInactiveTintColor:"#333333"
      })}
      >
        
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Departments" component={Departments} />
        <Tab.Screen name="Doctors" component={Doctors} />
        <Tab.Screen name="About Us" component={AboutUs} />
        <Tab.Screen name="Appointment" component={Appointment} />

        
      </Tab.Navigator>
  
  </>);
};

export default MainStack;