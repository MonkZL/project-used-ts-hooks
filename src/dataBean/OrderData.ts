export enum orderTypes {
    getSuccess,//接单成功
    ongoing,//进行中
    over,//已结束
    repairing,//维保中
    canceled//已取消
}

export interface OrderData {
    id: string,
    orderType: orderTypes,
    orderContent: string[],
    repairTips: string,
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
    }
]
