import {jumpTo} from "./Navigation";

export function jumpToTabOrderScreen(params: object | undefined = undefined) {
    jumpTo('TabOrderScreen', params)
}

export function jumpToTabOrderReceivingCenterScreen(params: object | undefined = undefined) {
    jumpTo('TabOrderReceivingCenterScreen', params)
}

export function jumpToTabMineScreen(params: object | undefined = undefined) {
    jumpTo('TabMineScreen', params)
}
