import {StyleSheet} from 'react-native'
import {Size, WINDOW_WIDTH} from "../../tools/WindowTools";

const styles = StyleSheet.create({
    container: {
        width: WINDOW_WIDTH,
        height: '100%',
        backgroundColor: '#FAFAFA'
    },
    top_box: {
        width: '100%',
        paddingHorizontal: Size(16),
        paddingTop: Size(3),
        paddingBottom: Size(18),
        backgroundColor: '#FFFFFF'
    },
    user_label_box: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user_avatar: {
        width: Size(64),
        height: Size(64),
        borderRadius: Size(32),
        marginLeft: Size(4)
    },
    name_and_tips_box: {
        marginLeft: Size(8)
    },
    name: {
        color: '#303133',
        fontSize: Size(18)
    },
    tips_box: {
        borderRadius: Size(2),
        borderColor: '#FF5F93',
        borderWidth: 1,
        marginRight: 'auto',
        marginTop: Size(6)
    },
    top_box_text: {
        color: '#FF5F93',
        fontSize: Size(10),
        marginHorizontal: Size(4),
        marginVertical: Size(2.5)
    },
    type_btn: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto'
    },
    type_btn_text: {
        color: '#303133',
        fontSize: Size(14)
    },
    type_btn_icon: {
        width: Size(14.5),
        height: Size(14.5),
        marginLeft: Size(7.5),
        tintColor: '#606166',
        transform: [{rotateZ: '90deg'}]
    },
    order_and_wallet_box: {
        marginTop: Size(16.5),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    order_num_box: {
        width: Size(173.5),
        height: Size(75),
        justifyContent: 'center',
        paddingLeft: Size(21.5),
    },
    order_num_title: {
        color: '#303133',
        fontSize: Size(16)
    },
    order_num: {
        color: '#909199',
        fontSize: Size(11)
    },
    bg_wallet_box: {
        width: Size(173.5),
        height: Size(75),
        justifyContent: 'center',
        paddingLeft: Size(21.5),
    },
    bg_wallet_title: {
        color: '#303133',
        fontSize: Size(16)
    },
    bg_wallet: {
        color: '#909199',
        fontSize: Size(11)
    },
    bottom_box: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        marginTop: Size(10)
    },
    item_box: {
        width: '100%',
        height: Size(52),
        paddingLeft: Size(16),
        paddingRight: Size(13),
        flexDirection: 'row',
        alignItems: 'center'
    },
    item_icon: {
        width: Size(16),
        height: Size(16),
    },
    item_text: {
        color: '#303133',
        fontSize: Size(15),
        marginLeft: Size(16)
    },
    item_icon_arrow: {
        width: Size(14.5),
        height: Size(14.5),
        marginLeft: 'auto'
    },
});

export default styles;
