import React from "react";
import {Size, WINDOW_WIDTH} from "../../tools/WindowTools";
import {SceneMap, TabBar, TabView} from "react-native-tab-view";
import TabOrderFragment from "./TabOrderFragment";
import TabBarIndicator from "react-native-tab-view/src/TabBarIndicator";

const renderScene = SceneMap({
    new: TabOrderFragment,
    ongoing: TabOrderFragment,
    over: TabOrderFragment,
    repairing: TabOrderFragment,
    all: TabOrderFragment,
});

const renderIndicator = (props: any) => {
    return (
        <TabBarIndicator
            {...props}
            getTabWidth={(index) => {
                return WINDOW_WIDTH / 5
            }}
            style={{
                width: Size(28),
                height: Size(2),
                backgroundColor: '#40B2FF',
                left: WINDOW_WIDTH / 10 - Size(28) / 2
            }}/>
    )
}

const renderTabBar = (props: any) => {
    return (
        <TabBar
            {...props}
            renderIndicator={renderIndicator}
            style={{backgroundColor: '#ffffff'}}
            labelStyle={{color: '#40B2FF', fontSize: Size(15)}}
            activeColor={'#40B2FF'}
            inactiveColor={'#606166'}
        />
    )
}

function TabOrderScreen() {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'new', title: '新订单'},
        {key: 'ongoing', title: '进行中'},
        {key: 'over', title: '已完成'},
        {key: 'repairing', title: '维保中'},
        {key: 'all', title: '全部'},
    ]);

    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: WINDOW_WIDTH}}
        />
    );
}

export default TabOrderScreen;
