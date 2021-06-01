import React, { useState } from 'react';
import { Image, SafeAreaView,Keyboard, Text, TextInput, TouchableOpacity, View ,Button,Icon} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config';

import { FontAwesome , Entypo, MaterialIcons } from '@expo/vector-icons';

export default function HomeStatusScreen() {
  
    const reference = firebase.database().ref('sensors/');
    const [data, setData] = useState([]);
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

  



     return (
        

             <View style={styles.container }>
    <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">

               
                    <View>
               
                 <TouchableOpacity style={styles.button}
                 onPress= {() => onSubmitPress()}>
                     <Text style={styles.buttonTitle}>Status</Text>
                 </TouchableOpacity>
                 
                </View>
                <View style={styles.action}>
                    <FontAwesome name="user" size={24} color="black" />
                    
       
      
                    <Text style={styles.text}>sss  </Text>
                  </View>
                  
                  
                </KeyboardAwareScrollView>
                </View>
               
  );
}

