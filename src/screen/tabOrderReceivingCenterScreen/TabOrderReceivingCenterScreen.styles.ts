import {StyleSheet} from "react-native";
import {Size, WINDOW_WIDTH} from "../../tools/WindowTools";

const styles = StyleSheet.create({
    container: {
        width: WINDOW_WIDTH,
        height: '100%',
        backgroundColor: '#FAFAFA',
        alignItems: 'center'
    },
    banner: {
        width: WINDOW_WIDTH,
        height: Size(112.5),
    },
    filter_box: {
        width: WINDOW_WIDTH,
        height: Size(40),
        backgroundColor: '#FFFFFF',
        flexDirection: 'row'
    },
    filter_btn: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    location_icon: {
        width: Size(14),
        height: Size(14)
    },
    location_text: {
        color: '#303133',
        fontSize: Size(14),
        marginHorizontal: Size(6)
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
    separator: {
        height: Size(12)
    },
    btn_box: {
        flexDirection: 'row',
        marginTop: Size(20)
    },
    btn_view_image: {
        flex: 1,
        height: Size(34),
        borderRadius: Size(3),
        borderColor: '#40B2FF',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_view_image_text: {
        color: '#40B2FF',
        fontSize: Size(14)
    },
    btn_operation: {
        flex: 1,
        height: Size(34),
        borderRadius: Size(3),
        borderColor: '#909199',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: Size(16)
    },
    btn_operation_text: {
        color: '#909199',
        fontSize: Size(14),
    },
    btn_operation_default: {
        flex: 1,
        height: Size(34),
        borderRadius: Size(3),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: Size(16),
        backgroundColor: '#40B2FF'
    },
    btn_operation_text_default: {
        color: '#FFFFFF',
        fontSize: Size(14),
    },
    btn_invited: {
        position: 'absolute',
        right: 0,
        bottom: Size(14)
    },
    img_invited: {
        width: Size(94),
        height: Size(94),
    }
});

export default styles;
