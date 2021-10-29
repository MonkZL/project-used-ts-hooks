import React, {useReducer, useState} from "react";
import {
    FlatList,
    Image,
    ImageSourcePropType,
    ImageStyle,
    ListRenderItem,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import styles from "./TabOrderReceivingCenterScreen.styles";
import {bg_order_receiving_center, icon_frown, icon_right_arrow, img_invited} from "../../file/image/Images";
import {defaultOrderType, localOrderReceivingCenterData, OrderData} from "../../dataBean/OrderData";
import OrderReceivingCenterModal from "../../view/orderReceivingCenterImageModal/OrderReceivingCenterModal";

function TabOrderReceivingCenterScreen() {


    const renderFilter = (icon: ImageSourcePropType, text: string, iconStyle: ImageStyle = {}, leftIcon: boolean = false) => {
        return (

            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.filter_btn}>
                {leftIcon && <Image source={icon} style={[styles.location_icon, iconStyle]} resizeMode={'contain'}/>}
                <Text style={styles.location_text}>{text}</Text>
                {!leftIcon && <Image source={icon} style={[styles.location_icon, iconStyle]} resizeMode={'contain'}/>}
            </TouchableOpacity>

        )
    }

    const renderItem: ListRenderItem<OrderData> = ({item, index}) => {

        const renderDescription = (key: string, value: string) => {
            return (
                <View style={styles.description_box}>
                    <Text style={styles.description_key}>{key}</Text>
                    <Text style={styles.description_value}>{value}</Text>
                </View>
            )
        }

        const renderBtn = () => {
            let operationBtnStyle;
            let operationBtnTextStyle;
            let operationBtnText;
            switch (item.defaultOrderType) {
                case defaultOrderType.default:
                    operationBtnStyle = styles.btn_operation_default;
                    operationBtnTextStyle = styles.btn_operation_text_default;
                    operationBtnText = '我要报价';
                    break;
                case defaultOrderType.overOffer:
                    operationBtnStyle = styles.btn_operation;
                    operationBtnTextStyle = styles.btn_operation_text;
                    operationBtnText = '已报价';
                    break;
                case defaultOrderType.end:
                    operationBtnStyle = styles.btn_operation;
                    operationBtnTextStyle = styles.btn_operation_text;
                    operationBtnText = '已结束';
                    break;
            }
            return (
                <View style={styles.btn_box}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.btn_view_image}>
                        <Text style={styles.btn_view_image_text}>{'查看图片'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={operationBtnStyle}>
                        <Text style={operationBtnTextStyle}>{operationBtnText}</Text>
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View
                key={index}
                style={styles.item_box}>
                <View style={styles.title_box}>
                    <Text style={styles.title}>{'上门维修'}</Text>
                </View>
                <View style={styles.service_content_and_pay_money}>
                    <View style={styles.service_content_box}>
                        {
                            item.orderContent?.map((item, index) => {
                                return (
                                    <View style={styles.service_content}>
                                        <Text style={styles.service_content_text}>{item}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
                {renderDescription('服务时间', item.serviceStartTime)}
                {renderDescription('服务地址', item.serviceAddress)}
                {renderBtn()}
            </View>
        )
    }

    const ItemSeparatorComponent = () => {
        return <View style={styles.separator}/>
    }

    const [isModalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <Image source={bg_order_receiving_center} style={styles.banner} resizeMode={'cover'}/>
            <View style={styles.filter_box}>
                {renderFilter(icon_frown, '成都市', undefined, true)}
                {renderFilter(icon_right_arrow, '成都', {transform: [{rotateZ: '90deg'}]})}
                {renderFilter(icon_right_arrow, '上门维修', {transform: [{rotateZ: '90deg'}]})}
            </View>
            <FlatList<OrderData>
                data={localOrderReceivingCenterData}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.id}
                ItemSeparatorComponent={ItemSeparatorComponent}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(prevIsModalVisible => !prevIsModalVisible)
                }}
                style={styles.btn_invited}
                activeOpacity={0.5}>
                <Image source={img_invited} style={styles.img_invited} resizeMode={'contain'}/>
            </TouchableOpacity>
            <OrderReceivingCenterModal isModalVisible={isModalVisible} setModalVisible={setModalVisible}/>
        </View>
    )
}

export default TabOrderReceivingCenterScreen;
