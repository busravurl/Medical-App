import { View, TextInput, Text, TouchableOpacity, SafeAreaView, StyleSheet, ImageBackground, Alert } from 'react-native'
import React, { useState } from 'react'
import { wp } from '../../utils/screenResize'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/userInformation/actions';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  
  const handleLogin = async () => {
    try {
      const response = await axios.post('https://almaestro.org/api/login', {
        email,
        password,
      });
      
      const data = response.data;
      console.log('useruseruser',data.data);
      //dispatch({ type: LOGIN_SUCCESS, payload: data.data.user });
      dispatch(loginSuccess(data.data));
      if (data.error === 0) {
        //console.log('token',data.data);
        navigation.navigate('MainStack', {screen: 'Appointment' });
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
                  <Text style={{color: '#1f3d9d',fontWeight: 'bold',padding: wp(5),fontSize: wp(6)}}>LOGIN</Text>
              </View>
                 
        <View style={{ alignItems: 'center'}}>
          <View style={styles.card}>
              <TextInput 
              style={{color:'#cecece', paddingLeft: wp(2), width: '100%'}}
              placeholder="E mail"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor={'#cecece'}
              ></TextInput>
          </View>
          <View style={styles.card}>
              <TextInput 
              style={{color:'#cecece', paddingLeft: wp(2), width: '100%'}}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              placeholderTextColor={'#cecece'}
              ></TextInput>
          </View>
          <View style={{
            backgroundColor: '#1f3d9d',
            margin: wp(3),width:'80%', 
            height: wp(12),
            borderRadius: 20 ,
            alignItems: 'center',
            justifyContent: 'center'}}>
            <TouchableOpacity 
              onPress={handleLogin}>
              <Text style={{color:"#fff", fontWeight:'700', fontSize: wp(5)}}>Login</Text></TouchableOpacity> 
          </View>
          <View style={{flexDirection: 'row',margin: wp(3)}}>
            <Text style={{color:"#cecece"}}>Don't you have an account? </Text>
            <TouchableOpacity onPress={() => {navigation.navigate('RegisterPage')}}><Text style={{color:"#4d69a6"}} > Go Register</Text></TouchableOpacity>
          </View></View>
           </ImageBackground>
            
    </SafeAreaView> 
  )
}

export default Login

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