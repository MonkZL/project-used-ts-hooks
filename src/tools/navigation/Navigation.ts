import {createNavigationContainerRef, StackActions, TabActions} from "@react-navigation/native";
import {NavigationProp} from "@react-navigation/core/lib/typescript/src/types";

const navigationRef = {current: {}};

export function initUseNavigation() {
    return navigationRef.current = createNavigationContainerRef()
}

function getNavigation() {
    return navigationRef.current! as NavigationProp<ReactNavigation.RootParamList>
}

export function jumpTo(name: string, params: object | undefined = undefined) {
    const navigation = getNavigation();
    const tabActionType = TabActions.jumpTo(name, params);
    navigation.dispatch(tabActionType);
}

export function pushTo(name: string, params: object | undefined = undefined) {
    const navigation = getNavigation();
    const stackActionType = StackActions.push(name, params);
    navigation.dispatch(stackActionType);
}
