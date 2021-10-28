import React from "react";
import {FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Route, SceneRendererProps} from "react-native-tab-view/src/types";
import {Size, WINDOW_WIDTH} from "../../tools/WindowTools";
import {LocalOrderDataFilter, ongoingType, OrderData, orderTypes} from "../../dataBean/OrderData";

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

        const renderGetSuccessBtn = () => {
            return (
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.btn_start_service}>
                    <Text style={styles.btn_start_service_text}>{'开始服务'}</Text>
                </TouchableOpacity>
            )
        }

        const renderOngoingBtn = () => {
            switch (item.ongoingType) {
                case ongoingType.supplementaryPriceCan:
                    return (
                        <View style={styles.btn_service_ongoing_box}>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={styles.btn_supplementary_price}>
                                <Text style={styles.btn_supplementary_price_text}>{'申请补价'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={styles.btn_complete_service}>
                                <Text style={styles.btn_complete_service_text}>{'服务完成'}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                case ongoingType.supplementaryPriceNeed:
                    return (
                        <View style={styles.btn_service_ongoing_box}>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={styles.btn_supplementary_price}>
                                <Text style={styles.btn_supplementary_price_text}>{'撤销补价'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={styles.btn_complete_service}>
                                <Text style={styles.btn_complete_service_text}>{'服务完成'}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                case ongoingType.supplementaryPriceOver:
                    return (
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.btn_complete_service_big}>
                            <Text style={styles.btn_complete_service_text}>{'服务完成'}</Text>
                        </TouchableOpacity>
                    )
                default:
                    return null
            }
        }

        const renderOverBtn = () => {
            return (
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.btn_view_evaluate}>
                    <Text style={styles.btn_view_evaluate_text}>{'查看评价'}</Text>
                </TouchableOpacity>
            )
        }

        const renderRepairing = () => {
            return (
                <View style={styles.btn_service_ongoing_box}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.btn_supplementary_price}>
                        <Text style={styles.btn_supplementary_price_text}>{'查看评价'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.btn_complete_service}>
                        <Text style={styles.btn_complete_service_text}>{'维保完成'}</Text>
                    </TouchableOpacity>
                </View>
            )
        }

        switch (item.orderType) {
            case orderTypes.getSuccess:
                return renderGetSuccessBtn()
            case orderTypes.ongoing:
                return renderOngoingBtn()
            case orderTypes.over:
                return renderOverBtn()
            case orderTypes.repairing:
                return renderRepairing()
            case orderTypes.canceled:
                return (<View/>)
        }
    }

    const renderSupplementary = () => {
        if (!item.hasExtraRepairing) {
            return null
        }
        return (
            <View style={styles.supplementary_description_box}>
                <Text style={styles.supplementary_description_text}>{'附赠30天维保'}</Text>
                <Text style={styles.supplementary_description_text}>{'2019.07.25-08.24为维保期'}</Text>
            </View>
        )
    }

    const renderCancelTips = () => {
        if (item.orderType !== orderTypes.canceled) {
            return null
        }
        return (
            <Text style={styles.cancel_tips_text}>{'服务已开始，客户取消订单，本单已补偿20元路费，辛苦师傅啦！'}</Text>
        )
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
                <View style={styles.price_box}>
                    <Text style={styles.pay_money_unit}>￥<Text style={styles.pay_money}>{item.payMoney}</Text></Text>
                    {
                        item.supplementaryPrice && <Text
                            style={styles.supplementary_price_text}>{`${item.ongoingType === ongoingType.supplementaryPriceNeed ? '需补' : '已补'}￥${item.supplementaryPrice}`}</Text>
                    }
                </View>
            </View>
            {renderDescription('服务时间', item.serviceStartTime)}
            {renderDescription('服务地址', item.serviceAddress)}
            {renderBtn()}
            {renderSupplementary()}
            {renderCancelTips()}
        </View>
    )
}

const ItemSeparatorComponent = () => {
    return <View style={styles.separator}/>
}

const renderList = (route: Route) => {


    return (
        <FlatList<OrderData>
            showsVerticalScrollIndicator={false}
            data={LocalOrderDataFilter(route)}
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
            {renderList(prop.route)}
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
        fontSize: Size(17),
        fontWeight: '500'
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
        fontWeight: 'bold'
    },
    pay_money: {
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
        flex: 1,
        lineHeight: Size(16.5)
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
    btn_service_ongoing_box: {
        flexDirection: 'row',
        marginTop: Size(20)
    },
    btn_supplementary_price: {
        flex: 1,
        height: Size(34),
        borderRadius: Size(3),
        borderColor: '#40B2FF',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_supplementary_price_text: {
        color: '#40B2FF',
        fontSize: Size(14)
    },
    btn_complete_service: {
        flex: 1,
        height: Size(34),
        borderRadius: Size(3),
        backgroundColor: '#40B2FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: Size(16)
    },
    btn_complete_service_text: {
        color: '#FFFFFF',
        fontSize: Size(14)
    },
    btn_complete_service_big: {
        width: '100%',
        height: Size(34),
        borderRadius: Size(3),
        backgroundColor: '#40B2FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Size(20)
    },
    price_box: {
        alignItems: 'flex-end',
    },
    supplementary_price_text: {
        color: '#FF6D9C',
        fontSize: Size(12),
        marginTop: Size(4)
    },
    btn_view_evaluate: {
        width: '100%',
        height: Size(34),
        borderRadius: Size(3),
        borderColor: '#40B2FF',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Size(20)
    },
    btn_view_evaluate_text: {
        color: '#40B2FF',
        fontSize: Size(14)
    },
    supplementary_description_box: {
        flexDirection: 'row',
        marginTop: Size(16),
        width: '100%',
        justifyContent: 'space-between'
    },
    supplementary_description_text: {
        color: '#909199',
        fontSize: Size(12)
    },
    cancel_tips_text: {
        color: '#FE4C4E',
        fontSize: Size(12),
        marginTop: Size(8),
        lineHeight: Size(16.5)
    }
});

export default TabOrderFragment;
