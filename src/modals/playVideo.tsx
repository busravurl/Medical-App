import React, { useState } from "react";
import Icon from 'react-native-vector-icons/Feather'
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';
import Modal from 'react-native-modal';
import { wp } from "../utils/screenResize";


const MakeAppointmentModal = ({visible, onClose}) => {

    return(
        <Modal
            style={{justifyContent: 'center', margin:0}} 
            isVisible={visible}
            swipeDirection="down" 
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
                height: '50%'}}>

                <TouchableOpacity onPress={onClose} style={{alignItems: 'flex-end'}}> 
                    <Icon name={"x"} size={wp(6)} color={'#d4d4d4'} /></TouchableOpacity>
                  
                    <View style={{marginTop: wp(15)}}>
                    <YoutubePlayer
                        height={300}
                        play={true}
                        videoId={'pc1jlelzmPY'}
                    />
                    </View>

             
            </View>

                    
            
        </Modal>
    );
}

export default MakeAppointmentModal;