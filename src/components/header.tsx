import React from "react";
import {View, Image, Text, TouchableOpacity} from "react-native";
import { wp } from "../utils/screenResize";
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userInformation/actions";
import { RootState } from "../redux/store";

const Header =() => {

    const navigation = useNavigation();
    const dispatch = useDispatch();

    
    const isLoggedIn = useSelector((state: RootState) => state.userInformationReducer.isLoggedIn);
  
    const handleLogout = async () => {
        
        dispatch(logout());
        navigation.navigate('MainStack', {screen: 'Home' });
    };

    return (
        <View style={{ shadowColor: "#b2b2b2",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 8}}>
           
            <View style={{ height: wp(17),backgroundColor: '#1f3d9d', flexDirection: 'row', justifyContent: 'space-between'}}> 
                <View><Image 
                source={require('../assets/footer-logo.png')} 
                style={{ marginLeft: wp(2), width: wp(30), resizeMode:'contain'}}/></View>
                {isLoggedIn ? <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingRight: wp(3)}}>
                    <Icon name={"phone-call"} size={wp(6)} color={'#f22283'} />
                    <View style={{marginLeft: wp(2)}}>
                        <Text style={{color: '#fff',fontSize: wp(2.5)}}> Call us for any question </Text>
                        <Text style={{color: '#fff',fontSize: wp(3), fontWeight: 'bold'}}> +90 537 740 43 65 </Text>
                    </View>
                </View>
                <TouchableOpacity  onPress={handleLogout} style={{alignItems: 'center',justifyContent: 'center',paddingRight: wp(3)}}>
                    <Icon name={"log-out"} size={wp(6)} color={'#fff'} /></TouchableOpacity>
                </View> :  <View style={{flexDirection: 'row', alignItems: 'center', paddingRight: wp(3)}}>
                    <Icon name={"phone-call"} size={wp(6)} color={'#f22283'} />
                    <View style={{marginLeft: wp(2)}}>
                        <Text style={{color: '#fff',fontSize: wp(2.5)}}> Call us for any question </Text>
                        <Text style={{color: '#fff',fontSize: wp(3), fontWeight: 'bold'}}> +90 537 740 43 65 </Text>
                    </View>
                </View>}

            </View>
        </View>
    )
}

export default Header