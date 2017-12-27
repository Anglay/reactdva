import React from 'react';
import {connect} from 'dva';
import {Redirect, Route, Switch } from 'dva/router';
import {Layout, Icon} from 'antd';
//左侧菜单
import SiderMenu from './menu';
import RouterConfig from './routerconfig';

const {Header, Content} = Layout;

import './style.less'

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state={
            menuList:[],
            collapsed: false,
            nextProps:{}
        }
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    
    componentDidMount(){
        this.setState({
            menuList:[{
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
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({nextProps})
    }

    render() {
        return (
            <Layout className="main-container">
                <SiderMenu collapsed={this.state.collapsed} menuList={this.state.menuList} location={this.props.location}/>
                <Layout className="layout-container">
                    <Header style={{background: '#fff',padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed? 'menu-unfold': 'menu-fold'}
                            onClick={this.toggle.bind(this)}/>
                    </Header>
                    <Content className="content-container">
                        <RouterConfig nextProps={this.state.nextProps} menuList={this.state.menuList}/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

Main.propTypes = {};

export default connect()(Main);
