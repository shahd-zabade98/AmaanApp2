import React, { useState } from 'react';
import { Image, SafeAreaView,Keyboard, Text, TextInput, TouchableOpacity, View ,Button,Icon} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config';
import * as MediaLibrary from 'expo-media-library';
import { FontAwesome , Entypo, MaterialIcons } from '@expo/vector-icons';
import Notifications from 'expo-notifications';
//import Permissions from 'expo-permissions';
import AwesomeButton from 'react-native-really-awesome-button';
export default function HomeStatusScreen() {
  
    const reference = firebase.database().ref('sensors/');
    //const [data, setData] = useState([]);
   const onSubmitPress = () => {
        reference 
       .on('value', (snapshot) => {
           //const SensVal = snapshot.val();
          const words = (snapshot.val()).split(',');
           setData(words);
           console.log("Room1: " + words[0]);
         
         });
         
        
     }
    /* useEffect(() => {
        reference
          .on('value', snapshot => {
            const response = snapshot.val();
            //console.log(response);
            const keys = Object.keys(response);
            const questWithKeys = keys.map(id => {
            return { ...response[id], id }
            });
            setData(questWithKeys);
            console.log(questWithKeys); 
            //return { data: questWithKeys };
                
          
          });
      
    }, []);*/
      
     /*registerForPushNotifications =async () =>{
         //check permissions
         const {status} = await MediaLibrary.getPermissionsAsync();
         let finalStatus = status;

         //if no existing permission,ask user for it
         if(status !== 'granted'){
             const {status} = await MediaLibrary.requestPermissionsAsync();
             finalStatus=status;
         }
           //if no permission
         if(finalStatus !== 'granted'){return;}
         
         //get push notification token
         let token = await Notifications.getDevicePushTokenAsync();
         console.log(token);

     }*/



     return (
        

             <View style={styles.container }>
    <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">

               
                    <View style={styles.button}>
               
                    <AwesomeButton progress textColor="#fffff0" width={120} type="primaryFlat" backgroundColor="#cd5c5c" backgroundActive="rgba(0,0,0,0)" borderRadius={30}  onPress={(next) => { onSubmitPress() 
                    next(); }}> Status </AwesomeButton>
                 
                </View>
                <View style={styles.action}>
                    <FontAwesome name="user" size={24} color="black" />
                    
       
      
                    <Text style={styles.text}>sss  </Text>
                  </View>
                  
                  
                </KeyboardAwareScrollView>
                </View>
               
  );
}

