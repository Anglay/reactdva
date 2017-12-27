import React from 'react';
import {connect} from 'dva';

class Login extends React.Component {
    
    render() {
        return (
            <div>Login</div>
        );
    }
}

Login.propTypes = {};

export default connect()(Login);
