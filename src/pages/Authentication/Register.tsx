import { View, TextInput, Text, TouchableOpacity, Image, SafeAreaView, StyleSheet, ImageBackground, Alert } from 'react-native'
import React, { useState } from 'react'
import { wp } from '../../utils/screenResize'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Register = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://almaestro.org/api/register', {
        name,
        phone,
        email,
        password,
      });
      
      const data = response.data;

      if (data.error === 0) {
        navigation.navigate('LoginPage')
        Alert.alert('Success', 'Registration successful');
      } else {
        const errorMessage = data.message;
        Alert.alert('Error', errorMessage);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred');
    }
  };

  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}>
      
      <ImageBackground 
              source={require('../../assets/footer.png')}
              resizeMode= 'cover' 
              style={{flex: 1,height: '100%', justifyContent: 'center'}}>
                  <View  style={{marginBottom:wp(20), justifyContent: 'center' ,alignItems: 'center'}}>
                      {/* <Image style={{width: wp(20),height: wp(20), resizeMode: 'center',marginLeft: wp(2)}}  source={require('../../assets/footer-logo.png')}/> */}
                      <Text style={{color: '#1f3d9d',fontWeight: 'bold',padding: wp(5),fontSize: wp(6)}}>REGISTER</Text>
                  </View>
                 
        <View style={{ alignItems: 'center'}}>
        <View style={styles.card}>
            <TextInput 
            style={{color:'#c7c7c7', paddingLeft: wp(2)}}
            onChangeText={setName}
            placeholder="name"
            placeholderTextColor={'#cecece'}
            value={name}
            ></TextInput>
        </View>
        <View style={styles.card}>
            <TextInput 
            style={{color:'#c7c7c7', paddingLeft: wp(2)}}
            onChangeText={setPhone}
            placeholder="phone"
            placeholderTextColor={'#cecece'}
            value={phone}
            ></TextInput>
        </View>
        <View style={styles.card}>
            <TextInput 
            style={{color:'#c7c7c7', paddingLeft: wp(2)}}
            onChangeText={setEmail}
            placeholder="e-mail adress"
            placeholderTextColor={'#cecece'}
            value={email}
            ></TextInput>
        </View>
        <View style={styles.card}>
            <TextInput 
            style={{color:'#c7c7c7', paddingLeft: wp(2)}}
            onChangeText={setPassword}
            placeholder="password"
            placeholderTextColor={'#cecece'}
            value={password}
            ></TextInput>
        </View>
        
        <View style={{
            backgroundColor: '#1f3d9d',
            margin: wp(3),width:'80%', 
            height: wp(12),
            borderRadius: 20 ,
            alignItems: 'center',
            justifyContent: 'center'}}>
         <TouchableOpacity onPress={handleRegister}>
                <Text style={{color:"#fff", fontWeight:'700', fontSize: wp(5)}}>Register</Text>
              </TouchableOpacity>
        
        </View></View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: wp(3),
    paddingLeft:wp(2),
    width:'80%',
    height: wp(12),
    backgroundColor: '#fff',
    borderColor:'#cecece',
    borderWidth: 1.5,
    borderRadius: 20
  },
});