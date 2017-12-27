import React from 'react';
import {connect} from 'dva';
import {Link } from 'dva/router';
import {Layout,Menu, Icon} from 'antd';

const SubMenu = Menu.SubMenu;
const {Sider} = Layout;

class SiderMenu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            openKeys: [],
            current:"home",
            rootSubmenuKeys:[]
        }
    }
    
    onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({openKeys});
        } else {
            this.setState({
                openKeys: latestOpenKey?[latestOpenKey]:[]
            });
        }
    }

    onSelect(selected) {
        if (selected.item.props.role == "single") {
            this.setState({openKeys: []});
        }
        this.setState({current: selected.key});
    }
    componentWillReceiveProps(nextProps) {
        this.forceUpdate(()=>{
            let Keys = this.props.menuList.map(function(item){
                return item.menuCode
            })
            this.setState({
                rootSubmenuKeys:Keys
            })
            var pathnameArr = this.props.location.pathname.split("/");
            if(pathnameArr.length>2){
                this.setState({openKeys:[pathnameArr[1]]});
                this.setState({current: pathnameArr[2]});
            }else if(pathnameArr.length<=2){
                this.setState({openKeys:[]});
                this.setState({current: pathnameArr[1]});
            }
        })
    }
    render() {
        return (
            <Sider
                trigger={null}
                collapsible
                collapsed={this.props.collapsed}
                className="sider-content">
                <div className="logo"></div>
                <Menu
                    theme="dark"
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange.bind(this)}
                    onSelect={this.onSelect.bind(this)}
                    selectedKeys={[this.state.current]}>
                    {
                        this.props.menuList.map(function(item){
                            if(item.children&&item.children.length>0){
                                let childList = item.children.map(function(child){
                                    return <Menu.Item key={child.menuCode} role="dubble"><Link to={"/"+child.parentCode+"/"+child.menuCode} key={child.menuCode}>{child.menuName}</Link></Menu.Item>
                                })
                                return <SubMenu key={item.menuCode} title={<span><Icon type="mail"/><span>{item.menuName}</span></span>}>{childList}</SubMenu>
                            }else{
                                return <Menu.Item key={item.menuCode} role="single"><Link to={"/"+item.menuCode} key={item.menuCode}><Icon type="inbox"/><span>{item.menuName}</span></Link></Menu.Item>
                            }
                        })
                    }
                </Menu>
            </Sider>
        );
    }
}

SiderMenu.propTypes = {};

export default connect()(SiderMenu);
