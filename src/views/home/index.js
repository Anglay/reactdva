import React from 'react';
import {connect} from 'dva';
import './style.less'



class Home extends React.Component {
    
    render() {
        return (
            <div>Home</div>
        );
    }
}

Home.propTypes = {};

export default connect()(Home);
