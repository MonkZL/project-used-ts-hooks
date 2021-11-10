import React, {useReducer, useState} from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import styles from "./TestApp.styles";
import {Size} from "../../src/tools/WindowTools";

function TestApp({navigation, route = {}}: any) {

    const [count, setCount] = useState(0)

    let inputRef: TextInput | null;

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    inputRef!.focus()
                }}
                style={{
                    width: Size(40),
                    height: Size(40),
                    backgroundColor: 'red'
                }}/>
            <Text>{count}</Text>
            <TextInput
                ref={(ref) => inputRef = ref}
                style={{
                    width: Size(220),
                    height: Size(40),
                    backgroundColor: 'black',
                    paddingHorizontal: 20
                }}/>
            <TouchableOpacity
                onPress={() => {
                    setCount(prevState => prevState + 1)
                }}
                style={{
                    width: Size(40),
                    height: Size(40),
                    backgroundColor: 'red'
                }}/>
        </View>
    )

}

export default TestApp;
