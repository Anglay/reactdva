import React from 'react';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';
import { Router, Route, Switch } from 'dva/router';
import 'antd/dist/antd.less';
import IndexPage from './routes/IndexPage';

import Main from './views/main';
import Login from './views/login';


function RouterConfig({ history }) {
  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route path="/" component={Main} location={history}></Route>
        </Switch>
      </Router>
    </LocaleProvider>
  );
}

export default RouterConfig;
