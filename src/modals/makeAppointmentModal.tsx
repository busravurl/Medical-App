import React, { useState } from "react";
import Icon from 'react-native-vector-icons/Feather'
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import Modal from 'react-native-modal';
import { wp } from "../utils/screenResize";


const MakeAppointmentModal = ({visible, onClose, onSend}) => {
    const [phone, setphone] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSend = () =>{
        if(!phone && !name && !email) {
            return;
        }

        // onSend(phone, name, email);
        onSend=(() => Alert.alert('Send!'))
        setphone('');
        setName('');
        setEmail('');


    }

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
                  
                <Text style={{color: '#333333', fontWeight: 'bold', fontFamily: 'Montserrat-Regular', fontSize: wp(6)}}>MAKE AN APPOINTMENT</Text>
                <TextInput style={{
                    borderBottomWidth: wp(0.3),
                    borderColor:'#d4d4d4',
                    width: '100%',
                    marginTop: wp(4),
                    color: '#8e8e8e',
                    fontFamily: 'Montserrat-Regular',
                    paddingLeft: wp(2),
                }} value={name} onChangeText={setName} placeholder={'Name * '} />

                <TextInput style={{
                    borderBottomWidth: wp(0.3),
                    borderColor:'#d4d4d4',
                    width: '100%',
                    marginTop: wp(4),
                    color: '#8e8e8e',
                    fontFamily: 'Montserrat-Regular',
                    paddingLeft: wp(2)
                }} value={email} onChangeText={setEmail} placeholder={'Email * '} />
            
                <TextInput style={{
                    borderBottomWidth: wp(0.3),
                    borderColor:'#d4d4d4',
                    width: '100%',
                    marginTop: wp(4),
                    color: '#8e8e8e',
                    fontFamily: 'Montserrat-Regular',
                    paddingLeft: wp(2)
                }} multiline={true} value={phone} onChangeText={setphone} placeholder={'Phone * '} />

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity 
                    onPress={handleSend}
                    style={{ 
                        backgroundColor: '#f22283' ,width: wp(33), height: wp(10),marginTop: wp(3), borderRadius: wp(2), justifyContent: 'center', alignItems: 'center',
                        shadowColor: "#f22283",
                        shadowOffset: {
                        width: 0,
                        height: 1,
                        },
                        shadowOpacity: 0.22,
                        shadowRadius: 2.22,
                        elevation: 6 }}>
                        <Text style={{color: '#ffffff',fontSize: wp(3), fontWeight: 'bold',padding: wp(1)}}>S E N D</Text>
                    </TouchableOpacity>
                </View>

            </View>

                    
            
        </Modal>
    );
}

export default MakeAppointmentModal;