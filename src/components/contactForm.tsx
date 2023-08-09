import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { wp } from '../utils/screenResize'



const ContactForm = () => {

    const [text, setText] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    return(
        <View style={{width: '90%'}}>
            <Text style={{color: '#333333', fontWeight: 'bold', fontSize: wp(7)}}>Get in Touch</Text>
            <TextInput style={{
                backgroundColor:'#fbfbfb',
                borderWidth: wp(0.3),
                borderColor:'#d4d4d4',
                borderRadius: wp(2),
                width: '100%',
                marginTop: wp(4),
                color: '#8e8e8e',
                fontFamily: 'Montserrat-Regular',
                paddingLeft: wp(2)
            }} multiline={true} value={text} onChangeText={setText} placeholder={'Type your texts'} />

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TextInput style={{
                    backgroundColor:'#fbfbfb',
                    borderWidth: wp(0.3),
                    borderColor:'#d4d4d4',
                    borderRadius: wp(2),
                    width: '48%',
                    marginTop: wp(4),
                    color: '#8e8e8e',
                    fontFamily: 'Montserrat-Regular',
                    paddingLeft: wp(2),
                }} value={name} onChangeText={setName} placeholder={'Your Name'} />

                <TextInput style={{
                    backgroundColor:'#fbfbfb',
                    borderWidth: wp(0.3),
                    borderColor:'#d4d4d4',
                    borderRadius: wp(2),
                    width: '48%',
                    marginTop: wp(4),
                    color: '#8e8e8e',
                    fontFamily: 'Montserrat-Regular',
                    paddingLeft: wp(2)
                }} value={email} onChangeText={setEmail} placeholder={'Email'} />
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity style={{ 
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
                <Text style={{marginLeft: wp(3), fontSize: wp(3), alignSelf: 'center'}}>* Personal data will be encrypted</Text>
            </View>
        </View>

    )
}

export default ContactForm