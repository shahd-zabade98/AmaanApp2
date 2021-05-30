import React, { useState } from 'react';
import { Image, SafeAreaView,Keyboard, Text, TextInput, TouchableOpacity, View ,Icon} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config';
import { FontAwesome , Entypo, MaterialIcons } from '@expo/vector-icons';

export default function UserProfileScreen({route,navigation}) {

    let Infoo = route.params;
     
    return(
  
        <View style={styles.container }>
        <KeyboardAwareScrollView
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always">
              <Image
                    style={styles.logo}
                    source={require('../../../assets/logo2.png')}
                />
                   
                    <View style={styles.action}>
                    <FontAwesome name="user" size={24} color="black" />
                    <Text style={styles.text}>   Shahd Zabade</Text>
                  </View>
                  <View style={styles.action}>
                  <Entypo name="location-pin" size={24} color="black" />
                   
                  <Text style={styles.text}>   Tulkarm , Biet Leed</Text>
                     </View>
                     <View style={styles.action}>
                     <Entypo name="phone" size={24} color="black" />
                     <Text style={styles.text}>   0595407670</Text>
                  </View>
                  <View style={styles.action}>
                  <MaterialIcons name="family-restroom" size={24} color="black" />
                  <Text style={styles.text}>   7</Text>
                   </View>
                   
    
                 </KeyboardAwareScrollView>
            </View> 
        )
    















}