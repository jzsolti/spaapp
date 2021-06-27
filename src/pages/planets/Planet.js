import React from 'react';
import {Link} from "react-router-dom";
import Loading from '../../components/Loading';
import Error from '../../components/Error';

class Planet extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            url: null,
            planet: null,
            loaded: false,
            error: false
        }
    }

    componentWillMount() {

        fetch(`https://swapi.dev/api/planets/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    planet: data,
                    loaded: true
                })
            }).catch((error) => {
                this.setState({ error: true });
                console.error('Error:', error);
            });
    }

    content() {
        return <div>
            <h5 className="text-center">{this.state.planet.name}</h5>
            <ul className="list-group">
                <li key="planet-population" className="list-group-item d-flex justify-content-between align-items-center bg-dark">
                    <span>Population:</span> <span>{this.state.planet.population}</span>
                </li>
                <li key="planet-gravity" className="list-group-item d-flex justify-content-between align-items-center bg-dark">
                    <span>Gravity:</span> <span>{this.state.planet.gravity}</span>
                </li>
                <li key="planet-rotation_period" className="list-group-item d-flex justify-content-between align-items-center bg-dark">
                    <span>Rotation period:</span> <span>{this.state.planet.rotation_period}</span>
                </li>
                <li key="planet-climate" className="list-group-item d-flex justify-content-between align-items-center bg-dark">
                    <span>Climate:</span> <span>{this.state.planet.climate}</span>
                </li>
                <li key="planet-orbital_period" className="list-group-item d-flex justify-content-between align-items-center bg-dark">
                    <span>Orbital period:</span> <span>{this.state.planet.orbital_period}</span>
                </li>

            </ul>
        </div>
    }

    render() {

        let content = null;

        if (this.state.error) {
            content = <Error message="Something went wrong!" />
        } else if (this.state.loaded) {
            content = this.content();
        } else {
            content = <Loading />
        }

        return (
            <div>
                <div className="">
                    <Link to="/planets">Back to planets list</Link>
                    </div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        {content}
                    </div>
                </div>
            </div>
        )

    }
}

export default Planet;