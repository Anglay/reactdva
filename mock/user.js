export default {
    'GET /api/common/menu':{
        success:true,
        list:[{
            "menuCode": "home",
            "menuName": "主页",
        },{
            "menuCode": "outstock",
            "menuName": "出库",
            "children":[{
                "parentCode": "outstock",
                "menuCode": "sales_out",
                "menuName": "销售出库"
            },{
                "parentCode": "outstock",
                "menuCode": "ret_purchase_out",
                "menuName": "采购退货出库"
            },{
                "parentCode": "outstock",
                "menuCode": "allot_outstock",
                "menuName": "调拨出库"
            },{
                "parentCode": "outstock",
                "menuCode": "add_outstock",
                "menuName": "新增出库"
            }]
        },{
            "menuCode": "storage",
            "menuName": "库存",
            "children":[{
                "parentCode": "storage",
                "menuCode": "inventory",
                "menuName": "盘点"
            },{
                "parentCode": "storage",
                "menuCode": "adjust",
                "menuName": "库存调整"
            }]
        },{
            "menuCode": "instock",
            "menuName": "入库",
            "children":[{
                "parentCode": "instock",
                "menuCode": "purchase_in",
                "menuName": "采购入库"
            },{
                "parentCode": "instock",
                "menuCode": "ret_sales_in",
                "menuName": "销售退货入库"
            },{
                "parentCode": "instock",
                "menuCode": "allot_instock",
                "menuName": "调拨入库"
            },{
                "parentCode": "instock",
                "menuCode": "add_instock",
                "menuName": "新增入库"
            }]
        },{
            "menuCode": "report",
            "menuName": "报表",
            "children":[{
                "parentCode": "report",
                "menuCode": "purchase_report",
                "menuName": "采购入库报表"
            },{
                "parentCode": "report",
                "menuCode": "ret_sales_report",
                "menuName": "销售退货入库报表"
            },{
                "parentCode": "report",
                "menuCode": "sales_out_report",
                "menuName": "销售出库报表"
            }]
        }]
    },
    'GET /api/users': { users: [1, 2] },
    'GET /api/users/1': { id: 1 },
    'POST /api/users/create': (req, res) => { res.end('OK'); }
};