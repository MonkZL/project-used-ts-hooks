import React from "react";
import {Image, ImageBackground, ImageSourcePropType, Text, TouchableOpacity, View} from "react-native";
import styles from "./TabMineScreen.styles";
import {
    bg_order_num,
    bg_wallet,
    icon_agreement,
    icon_bulb,
    icon_flag, icon_frown,
    icon_manual,
    icon_right_arrow
} from "../../file/image/Images";

function TabMineScreen() {

    const renderItem = (icon: ImageSourcePropType, text: string) => {
        return (
            <View style={styles.item_box}>
                <Image source={icon} style={styles.item_icon} resizeMode={'contain'}/>
                <Text style={styles.item_text}>{text}</Text>
                <Image source={icon_right_arrow} style={styles.item_icon_arrow}/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.top_box}>
                <View style={styles.user_label_box}>
                    <Image
                        style={styles.user_avatar}
                        source={{uri: 'https://img2.baidu.com/it/u=1129741042,2488904607&fm=26&fmt=auto'}}/>
                    <View style={styles.name_and_tips_box}>
                        <Text style={styles.name}>19120821423</Text>
                        <View style={styles.tips_box}>
                            <Text style={styles.top_box_text}>初级维客</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.type_btn}
                        activeOpacity={0.5}>
                        <Text style={styles.type_btn_text}>营业</Text>
                        <Image source={icon_right_arrow} style={styles.type_btn_icon} resizeMode={'contain'}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.order_and_wallet_box}>
                    <ImageBackground source={bg_order_num} resizeMode={'contain'} style={styles.order_num_box}>
                        <Text style={styles.order_num_title}>接单总数</Text>
                        <Text style={styles.order_num}>268单</Text>
                    </ImageBackground>
                    <ImageBackground source={bg_wallet} resizeMode={'contain'} style={styles.bg_wallet_box}>
                        <Text style={styles.bg_wallet_title}>我的钱包</Text>
                        <Text style={styles.bg_wallet}>￥ 123234</Text>
                    </ImageBackground>
                </View>
            </View>
            <View style={styles.bottom_box}>
                {renderItem(icon_bulb, '我要服务')}
                {renderItem(icon_flag, '我要服务')}
                {renderItem(icon_manual, '使用手册')}
                {renderItem(icon_agreement, '用户协议')}
                {renderItem(icon_frown, '意见反馈')}
            </View>
        </View>
    )
}


export default TabMineScreen;
