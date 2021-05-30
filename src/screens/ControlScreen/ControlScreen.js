import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config';
//import { FontAwesome5,FontAwesome } from '@expo/vector-icons';

export default function ControlScreen({navigation}) {
    return(
<View style={styles.container }>
        <KeyboardAwareScrollView
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always">
              <Image
                    style={styles.logo}
                    source={require('../../../assets/logo2.png')}
                />
                </KeyboardAwareScrollView>
                </View>
    )

}