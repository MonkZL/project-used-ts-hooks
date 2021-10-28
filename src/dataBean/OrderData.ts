import {Route} from "react-native-tab-view";

export enum orderTypes {
    getSuccess,//接单成功
    ongoing,//进行中
    over,//已结束
    repairing,//维保中
    canceled//已取消
}

export enum ongoingType {
    supplementaryPriceCan,
    supplementaryPriceNeed,
    supplementaryPriceOver
}

export interface OrderData {
    id: string,
    orderType: orderTypes,
    ongoingType: ongoingType,
    supplementaryPrice: number,
    orderContent: string[],
    repairTips: string,
    hasExtraRepairing: boolean,
    payMoney: number,
    serviceStartTime: string,
    serviceAddress: string
}

//测试数据
export const LocalOrderData = [
    {
        id: '1',
        orderType: orderTypes.getSuccess,
        orderContent: ['厨卫洁具维修', '水管龙头维修', '厨卫洁具维修', '水管龙头维修'],
        repairTips: '30天维保',
        payMoney: 130,
        serviceStartTime: '2019-09-09 14:00~18:00 ',
        serviceAddress: '四川省成都市双流区牧华路三段111号1栋1单元'
    },
    {
        id: '2',
        orderType: orderTypes.getSuccess,
        orderContent: ['厨卫洁具维修', '水管龙头维修', '厨卫洁具维修', '水管龙头维修'],
        repairTips: '30天维保',
        payMoney: 130,
        serviceStartTime: '2019-09-09 14:00~18:00 ',
        serviceAddress: '四川省成都市双流区牧华路三段111号1栋1单元'
    },
    {
        id: '3',
        orderType: orderTypes.ongoing,
        ongoingType: ongoingType.supplementaryPriceCan,
        orderContent: ['厨卫洁具维修', '水管龙头维修', '厨卫洁具维修', '水管龙头维修'],
        repairTips: '30天维保',
        payMoney: 130,
        serviceStartTime: '2019-09-09 14:00~18:00 ',
        serviceAddress: '四川省成都市双流区牧华路三段111号1栋1单元'
    },
    {
        id: '4',
        orderType: orderTypes.ongoing,
        ongoingType: ongoingType.supplementaryPriceNeed,
        supplementaryPrice: 30,
        orderContent: ['厨卫洁具维修', '水管龙头维修', '厨卫洁具维修', '水管龙头维修'],
        repairTips: '30天维保',
        payMoney: 130,
        serviceStartTime: '2019-09-09 14:00~18:00 ',
        serviceAddress: '四川省成都市双流区牧华路三段111号1栋1单元'
    },
    {
        id: '5',
        orderType: orderTypes.ongoing,
        ongoingType: ongoingType.supplementaryPriceOver,
        supplementaryPrice: 30,
        orderContent: ['厨卫洁具维修', '水管龙头维修', '厨卫洁具维修', '水管龙头维修'],
        repairTips: '30天维保',
        payMoney: 130,
        serviceStartTime: '2019-09-09 14:00~18:00 ',
        serviceAddress: '四川省成都市双流区牧华路三段111号1栋1单元'
    },
    {
        id: '6',
        orderType: orderTypes.over,
        orderContent: ['厨卫洁具维修', '水管龙头维修', '厨卫洁具维修', '水管龙头维修'],
        repairTips: '30天维保',
        payMoney: 130,
        serviceStartTime: '2019-09-09 14:00~18:00 ',
        serviceAddress: '四川省成都市双流区牧华路三段111号1栋1单元'
    },
    {
        id: '7',
        orderType: orderTypes.over,
        ongoingType: ongoingType.supplementaryPriceOver,
        supplementaryPrice: 30,
        orderContent: ['厨卫洁具维修', '水管龙头维修', '厨卫洁具维修', '水管龙头维修'],
        repairTips: '30天维保',
        hasExtraRepairing: true,
        payMoney: 130,
        serviceStartTime: '2019-09-09 14:00~18:00 ',
        serviceAddress: '四川省成都市双流区牧华路三段111号1栋1单元'
    },
    {
        id: '8',
        orderType: orderTypes.repairing,
        orderContent: ['厨卫洁具维修', '水管龙头维修', '厨卫洁具维修', '水管龙头维修'],
        repairTips: '30天维保',
        hasExtraRepairing: true,
        payMoney: 130,
        serviceStartTime: '2019-09-09 14:00~18:00 ',
        serviceAddress: '四川省成都市双流区牧华路三段111号1栋1单元'
    },
    {
        id: '9',
        orderType: orderTypes.repairing,
        ongoingType: ongoingType.supplementaryPriceOver,
        supplementaryPrice: 30,
        orderContent: ['厨卫洁具维修', '水管龙头维修', '厨卫洁具维修', '水管龙头维修'],
        repairTips: '30天维保',
        hasExtraRepairing: true,
        payMoney: 130,
        serviceStartTime: '2019-09-09 14:00~18:00 ',
        serviceAddress: '四川省成都市双流区牧华路三段111号1栋1单元'
    },
] as OrderData[]

export const LocalOrderDataFilter = (route: Route): OrderData[] => {
    return LocalOrderData.filter((value, index, arr) => {
        switch (route.key) {
            case 'new':
                if (value.orderType === orderTypes.getSuccess) {
                    return value
                }
                break
            case 'ongoing':
                if (value.orderType === orderTypes.ongoing) {
                    return value
                }
                break;
            case 'over':
                if (value.orderType === orderTypes.over) {
                    return value
                }
                break;
            case 'repairing':
                if (value.orderType === orderTypes.repairing) {
                    return value
                }
                break;
            case 'all':
                return value
        }
    })
}
