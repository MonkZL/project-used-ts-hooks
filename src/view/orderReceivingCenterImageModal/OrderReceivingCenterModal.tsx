import React, {forwardRef, memo} from "react";
import {Easing, Text, View} from "react-native";
import {OrderReceivingCenterModalProps} from "./OrderReceivingCenterModal.props";
import {WINDOW_WIDTH} from "../../tools/WindowTools";
import Modal from "react-native-modalbox"

function OrderReceivingCenterModal(props: OrderReceivingCenterModalProps, ref: any) {

    return (
        <Modal
            backdrop
            backdropPressToClose
            style={{backgroundColor: 'green', height: 300}}
            entry={'top'}
            position={"top"}
            easing={Easing.linear}
            ref={ref}>
            <View
                style={{
                    width: WINDOW_WIDTH,
                    height: 300,
                    backgroundColor: "#FFFFFF"
                }}>
                <Text>13</Text>
            </View>
        </Modal>
    )

}

export default memo(forwardRef(OrderReceivingCenterModal));
