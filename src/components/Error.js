import React from 'react';

class Error extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="alert alert-danger">
                {this.props.message}
            </div>
        )
    }

}
export default Error;