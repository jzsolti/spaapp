import React from 'react';

class Film extends React.Component {

    constructor() {
        super();

        this.state = {
            title: null,
        }

    }

    componentWillMount() {

        fetch(this.props.film)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    title: data.title
                })
            })
    }

    render() {

        return (
            <div>
                {this.state.title}
            </div>
        )
    }

}

export default Film;