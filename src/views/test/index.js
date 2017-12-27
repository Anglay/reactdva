import React from 'react';
import {connect} from 'dva';

class Test extends React.Component {
    
    render() {
        return (
            <div>TEST</div>
        );
    }
}

Test.propTypes = {};

export default connect()(Test);
