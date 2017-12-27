import React from 'react';
import {connect} from 'dva';
import {Redirect, Route, Switch } from 'dva/router';
import {Layout, Icon} from 'antd';
import request from "../../utils/request";
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
        request("/api/common/menu").then((response)=>{
            var data = response.data
            if(data.success){
                this.setState({
                    menuList:data.list
                });
            }
        })
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
