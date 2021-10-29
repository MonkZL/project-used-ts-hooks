import React from "react";
import Modal from "react-native-modal";
import {View} from "react-native";
import styles from "./OrderReceivingCenterModal.styles";
import {OrderReceivingCenterModalProps} from "./OrderReceivingCenterModal.props";

function OrderReceivingCenterModal(props: OrderReceivingCenterModalProps) {
    return (
        <Modal
            onBackdropPress={() => props.setModalVisible(false)}
            isVisible={props.isModalVisible}
            style={styles.modal}>
            <View style={{width: 100, height: 100, backgroundColor: 'red'}}/>
        </Modal>
    )

}

export default OrderReceivingCenterModal;
