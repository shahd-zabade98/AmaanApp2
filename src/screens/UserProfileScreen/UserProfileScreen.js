import React, { useState } from 'react';
import { Image, SafeAreaView,Keyboard, Text, TextInput, TouchableOpacity, View ,Icon} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config';
import { FontAwesome , Entypo, MaterialIcons } from '@expo/vector-icons';

export default function UserProfileScreen({route,navigation}) {
  //const entityRef = firebase.firestore().collection('entities');
    let Infoo = route.params;
   /* entityRef.get()
    .then((querySnapshot) =>{
        querySnapshot.forEach()
    })*/
    const onHome = () => {
      navigation.navigate('HomeStatus')
  }
  const onControl = () => {
    navigation.navigate('Control')
}
    return(
  
        <View style={styles.container }>
        <KeyboardAwareScrollView
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always">
              <Image
                    style={styles.logo}
                    source={require('../../../assets/logo2.png')}
                />
                   
                    <View style={styles.action1}>
                    <FontAwesome name="user" size={24} color="black" />
                    <Text style={styles.text}>   Shahd Zabade</Text>
                  </View>
                  <View style={styles.action1}>
                  <Entypo name="location-pin" size={24} color="black" />
                   
                  <Text style={styles.text}>   Tulkarm , Biet Leed</Text>
                     </View>
                     <View style={styles.action1}>
                     <Entypo name="phone" size={24} color="black" />
                     <Text style={styles.text}>   0595407670</Text>
                  </View>
                  <View style={styles.action1}>
                  <MaterialIcons name="family-restroom" size={24} color="black" />
                  <Text style={styles.text}>   7</Text>
                   </View>
                   <View style={styles.action2}>
                   <Text style={styles.text}>   Home plan:</Text>
                   <Image
                    style={styles.logo1}
                    source={require('../../../assets/2.gif')}
                />
                </View>
                   <View style={styles.action}>
                   <TouchableOpacity style={styles.button} onPress={() => onHome ()}>
                    <Text style={styles.buttonTitle}>Home Status</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onControl ()}>
                    <Text style={styles.buttonTitle}>    Control    </Text>
                </TouchableOpacity>
                </View>
                 </KeyboardAwareScrollView>
            </View> 
        )
    















}