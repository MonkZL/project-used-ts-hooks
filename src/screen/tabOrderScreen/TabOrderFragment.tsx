import React from "react";
import {FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Route, SceneRendererProps} from "react-native-tab-view/src/types";
import {Size, WINDOW_WIDTH} from "../../tools/WindowTools";
import {LocalOrderData, OrderData, orderTypes} from "../../dataBean/OrderData";

const renderItem: ListRenderItem<OrderData> = ({item, index, separators}) => {

    let orderTypeText = '';
    let orderTypeColor = '';

    switch (item.orderType) {
        case orderTypes.getSuccess:
        case orderTypes.ongoing:
            orderTypeText = '接单成功';
            orderTypeColor = '#35D399';
            break;
        case orderTypes.over:
            orderTypeText = '已完成';
            orderTypeColor = '#909199';
            break;
        case orderTypes.repairing:
            orderTypeText = '待维保';
            orderTypeColor = '#FF5C91';
            break;
        case orderTypes.canceled:
            orderTypeText = '已取消';
            orderTypeColor = '#FE4C4E';
            break;
    }

    const renderDescription = (key: string, value: string) => {
        return (
            <View style={styles.description_box}>
                <Text style={styles.description_key}>{key}</Text>
                <Text style={styles.description_value}>{value}</Text>
            </View>
        )
    }

    const renderBtn = () => {
        switch (item.orderType) {
            case orderTypes.getSuccess:
                return (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.btn_start_service}>
                        <Text style={styles.btn_start_service_text}>{'开始服务'}</Text>
                    </TouchableOpacity>
                )
            case orderTypes.ongoing:
                return (<View/>)
            case orderTypes.over:
                return (<View/>)
            case orderTypes.repairing:
                return (<View/>)
            case orderTypes.canceled:
                return (<View/>)
        }
    }

    return (
        <View
            key={index}
            style={styles.item_box}>
            <View style={styles.title_box}>
                <Text style={styles.title}>{'上门维修'}</Text>
                <Text style={styles.repair_tips}>{item.repairTips}</Text>
                <Text style={{...styles.order_type, color: orderTypeColor}}>{orderTypeText}</Text>
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
                <Text style={styles.pay_money_unit}>￥<Text style={styles.pay_money}>{item.payMoney}</Text></Text>
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

const renderList = () => {

    return (
        <FlatList<OrderData>
            data={LocalOrderData}
            renderItem={renderItem}
            ItemSeparatorComponent={ItemSeparatorComponent}
            keyExtractor={(item, index) => item.id}
            contentContainerStyle={styles.list}
        />
    )

}

function TabOrderFragment(prop: SceneRendererProps & { route: Route }) {
    return (
        <View style={styles.container}>
            {renderList()}
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        width: WINDOW_WIDTH,
        height: '100%',
        alignItems: 'center'
    },
    list: {paddingVertical: Size(14.5)},
    item_box: {
        width: Size(343),
        backgroundColor: '#FFFFFF',
        borderRadius: Size(3),
        paddingHorizontal: Size(12),
        paddingTop: Size(12),
        paddingBottom: Size(16)
    },
    title_box: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        color: '#303133',
        fontSize: Size(17)
    },
    repair_tips: {
        color: '#40B2FF',
        fontSize: Size(12),
        marginLeft: Size(8),
        flex: 1
    },
    order_type: {
        color: '#35D399',
        fontSize: Size(14)
    },
    separator: {height: Size(12)},
    service_content_and_pay_money: {
        flexDirection: 'row',
        marginTop: Size(8),
        alignItems: 'flex-start',
        marginBottom: Size(22)
    },
    service_content_box: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    service_content: {
        paddingVertical: Size(6),
        paddingHorizontal: Size(8),
        backgroundColor: '#F4F6FB',
        borderRadius: Size(3),
        marginTop: Size(8),
        marginRight: Size(8),
    },
    service_content_text: {
        color: '#606166',
        fontSize: Size(12)
    },
    pay_money_unit: {
        color: '#303133',
        fontSize: Size(14),
        marginTop: -Size(4),
    },
    pay_money: {
        color: '#303133',
        fontSize: Size(26),
    },
    description_box: {
        flexDirection: 'row',
        marginTop: Size(8)
    },
    description_key: {
        color: '#909199',
        fontSize: Size(12),
    },
    description_value: {
        color: '#303133',
        fontSize: Size(12),
        marginLeft: Size(18),
        flex: 1
    },
    btn_start_service: {
        width: '100%',
        height: Size(34),
        borderRadius: Size(3),
        backgroundColor: '#40B2FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Size(20)
    },
    btn_start_service_text: {
        color: '#FFFFFF',
        fontSize: Size(14)
    },
});

export default TabOrderFragment;
