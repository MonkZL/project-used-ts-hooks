import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TabOrderScreen from "./src/screen/tabOrderScreen/TabOrderScreen";
import TabOrderReceivingCenterScreen from "./src/screen/tabOrderReceivingCenterScreen/TabOrderReceivingCenterScreen";
import TabMineScreen from "./src/screen/tabMineScreen/TabMineScreen";
import {View} from "react-native";
import {Size} from "./src/tools/WindowTools";

const Tab = createBottomTabNavigator();
const TabScreenOptions = {
    headerTitleAlign: 'left',
    headerTitleStyle: {fontSize: Size(18), color: '#333333'}
} as any

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-information-circle'
                                : 'ios-information-circle-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-list-box' : 'ios-list';
                        }

                        // You can return any component that you like here!
                        return (
                            <View
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end'
                                }}>
                                <View
                                    style={{
                                        width: Size(24),
                                        height: Size(24),
                                        backgroundColor: color,
                                        marginBottom: Size(5)
                                    }}/>
                            </View>
                        );
                    },
                    tabBarActiveTintColor: '#40B2FF',
                    tabBarInactiveTintColor: '#303133',
                    tabBarStyle: {backgroundColor: '#ffffff'},
                    tabBarLabelStyle: {fontSize: Size(10)},
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
