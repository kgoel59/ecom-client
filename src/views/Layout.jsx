import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    {this.props.nav}
                </div>
                <div className="container-fluid">
                    {this.props.main}
                </div>
          </div>
        );
    }
}

export default Layout;