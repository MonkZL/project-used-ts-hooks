import React from "react";
import {Text, View} from "react-native";
import styles from "./MyWalletScreen.styles";
import MyWalletScreenProps from "./MyWalletScreen.props";

function MyWalletScreen({navigation, route}: any) {
    const params = route.params as MyWalletScreenProps;
    return (
        <View style={styles.container}>
            <Text>{params.money}</Text>
        </View>
    )

}

export default MyWalletScreen;
