import React from "react";
import {TouchableOpacity, View} from "react-native";
import {NavigationProp} from "@react-navigation/native";

function TabOrderReceivingCenterScreen({navigation}) {
    return (
        <TouchableOpacity
            onPress={()=>{
                navigation.navigate('TabOrderScreen')
            }}
            style={{width: 100, height: 100, backgroundColor: 'yellow'}}/>
    )
}

export default TabOrderReceivingCenterScreen;
