import React from "react";
import {TouchableOpacity} from "react-native";
import {jumpToTabMineScreen} from "../../tools/navigation/NavigationTools";

function TabOrderReceivingCenterScreen() {
    return (
        <TouchableOpacity
            onPress={() => {
                jumpToTabMineScreen()
            }}
            style={{width: 100, height: 100, backgroundColor: 'yellow'}}/>
    )
}

export default TabOrderReceivingCenterScreen;
