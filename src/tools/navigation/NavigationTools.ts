import {jumpTo, pushTo} from "./Navigation";
import MyWalletScreenProps from "../../screen/myWalletScreen/MyWalletScreen.props";

export function jumpToTabOrderScreen(params: object | undefined = undefined) {
    jumpTo('TabOrderScreen', params)
}

export function jumpToTabOrderReceivingCenterScreen(params: object | undefined = undefined) {
    jumpTo('TabOrderReceivingCenterScreen', params)
}

export function jumpToTabMineScreen(params: object | undefined = undefined) {
    jumpTo('TabMineScreen', params)
}

export function pushToMyWallet(params?: MyWalletScreenProps) {
    pushTo('MyWalletScreen', params)
}
