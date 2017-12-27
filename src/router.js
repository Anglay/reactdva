import React from 'react';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import { HashRouter, Route, Switch } from 'dva/router';
import 'antd/dist/antd.less';
import IndexPage from './routes/IndexPage';

import Main from './views/main';
import Login from './views/login';


function RouterConfig({ history }) {
  return (
    <LocaleProvider locale={zhCN}>
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route path="/" component={Main}></Route>
        </Switch>
      </HashRouter>
    </LocaleProvider>
  );
}

export default RouterConfig;
