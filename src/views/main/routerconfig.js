import React from 'react';
import {connect} from 'dva';
import {Redirect, Route, Switch } from 'dva/router';

//模块组件
import Test from '../test';
import Home from '../home';

class RouterConfig extends React.Component {
    constructor(props){
        super(props);
    }
    componentWillReceiveProps(nextProps) {
        this.forceUpdate();
    }
    render() {
        return (
            <Switch>
                {
                    this.props.menuList.map(function(item){
                        if(item.children&&item.children.length>0){
                            let childList = item.children.map(function(child){
                                return <Route key={child.menuCode} path={"/"+child.parentCode+"/"+child.menuCode} render={matchProps => <span>{item.menuName+"->"+child.menuName}</span>}></Route>
                            })
                            return childList;
                        }else{
                            return <Route key={item.menuCode} path={"/"+item.menuCode} render={matchProps => <span>{item.menuName}</span>}></Route>
                        }
                    })
                }
                <Redirect exact from="/" to="/home"/>
            </Switch>
        );
    }
}

RouterConfig.propTypes = {};

export default connect()(RouterConfig);
