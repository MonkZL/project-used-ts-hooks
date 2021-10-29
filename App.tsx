import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TabOrderScreen from "./src/screen/tabOrderScreen/TabOrderScreen";
import TabOrderReceivingCenterScreen from "./src/screen/tabOrderReceivingCenterScreen/TabOrderReceivingCenterScreen";
import TabMineScreen from "./src/screen/tabMineScreen/TabMineScreen";
import {Image, View} from "react-native";
import {Size} from "./src/tools/WindowTools";
import {initUseNavigation} from "./src/tools/navigation/Navigation";
import {
    icon_mine,
    icon_mine_active,
    icon_order,
    icon_order_active,
    icon_order_receiving_center,
    icon_order_receiving_center_active
} from "./src/file/image/Images";
import {RouteProp} from "@react-navigation/core/lib/typescript/src/types";

const Tab = createBottomTabNavigator();
const TabScreenOptions = {
    headerTitleAlign: 'left',
    headerTitleStyle: {fontSize: Size(18), color: '#333333'},
} as any

function App() {
    const navigationContainerRef = initUseNavigation();

    const renderTabBarIcon = ({route, focused, color, size}: any) => {
        let icon;
        switch (route.name) {
            case 'TabOrderScreen':
                icon = focused ? icon_order_active : icon_order;
                break;
            case 'TabOrderReceivingCenterScreen':
                icon = focused ? icon_order_receiving_center_active : icon_order_receiving_center;
                break;
            case 'TabMineScreen':
                icon = focused ? icon_mine_active : icon_mine;
                break;
        }
        return (
            <Image
                style={{
                    width: Size(24),
                    height: Size(24.5)
                }}
                source={icon}
                resizeMode={'contain'}/>
        );
    }

    return (
        <NavigationContainer ref={navigationContainerRef}>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        return renderTabBarIcon({route, focused, color, size})
                    },
                    tabBarActiveTintColor: '#40B2FF',
                    tabBarInactiveTintColor: '#303133',
                    tabBarStyle: {backgroundColor: '#ffffff', paddingHorizontal: Size(18)},
                    tabBarLabelStyle: {fontSize: Size(10), top: -Size(5)},
                    headerShadowVisible: false
                })}>
                <Tab.Screen name="TabOrderScreen" component={TabOrderScreen}
                            options={{
                                ...TabScreenOptions,
                                title: '维客先生',
                                tabBarLabel: '订单',
                            }}/>
                <Tab.Screen name="TabOrderReceivingCenterScreen" component={TabOrderReceivingCenterScreen}
                            options={{
                                ...TabScreenOptions,
                                title: '接单大厅',
                                tabBarLabel: '接单大厅',
                            }}/>
                <Tab.Screen name="TabMineScreen" component={TabMineScreen}
                            options={{
                                ...TabScreenOptions,
                                title: '我的',
                                tabBarLabel: '我的',
                            }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
