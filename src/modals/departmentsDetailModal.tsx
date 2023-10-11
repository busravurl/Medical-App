import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Modal from 'react-native-modal';
import { wp } from "../utils/screenResize";
import Icon from 'react-native-vector-icons/Feather'



const DepartmentsDetailModal = ({visible, onClose}) => {

    return(
        <Modal
            style={{justifyContent: 'center', margin:0}} 
            isVisible={visible}
            swipeDirection="down" 
            backdropOpacity={0.07}
            backdropColor= "#c9c9c9"
            onSwipeComplete={onClose}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}>
            <View style={{
                backgroundColor: 'white',
                padding: wp(5),
                margin: wp(5),
                borderRadius: wp(5),
                shadowColor: "#b2b2b2",
                shadowOffset: {
                width: 0,
                height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 5,
                height: '70%'}}>
                <View style={{flex:1, padding: wp(1)}}>
                <TouchableOpacity onPress={onClose} style={{alignItems: 'flex-end',marginBottom: wp(2)}}> 
                    <Icon name={"x"} size={wp(7)} color={'#d4d4d4'} /></TouchableOpacity>
                <Image style={{width: '100%',height: '50%', resizeMode:'cover'}} source={require('../assets/department.jpg')} />
                <Text style={{color: '#7b7b7b',marginLeft: wp(5), padding: wp(3)}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
       
                </View>

            </View>
        </Modal>
    );
}

export default DepartmentsDetailModal;