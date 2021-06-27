import React from 'react';
import Film from './Film';

class Characters extends React.Component {

    constructor() {
        super();

        this.state = {
            characters: [],
            character: {
                name: null,
                gender: null,
                homeworld: null,
                films: [],
                loadedCharacter: false
            }
        }
    }

    componentWillMount() {
        const url = `https://swapi.dev/api/people/`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    characters: data.results
                })

            })
    }

    getCharacter(character) {

        fetch(character.homeworld)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character: {
                        name: character.name,
                        gender: character.gender,
                        homeworld: data.name,
                        films: character.films,
                        loadedCharacter: true
                    }
                })
            })
    }

    render() {

        return (
            <div className="row">
                <div className="col-md-6">
                    <div className="card text-white bg-dark mb-3" >
                        <div className="card-header text-center">Characters</div>
                        <ul className="list-group bg-dark">
                            {
                                this.state.characters.map((character, i) => {
                                    return <li key={i} className="list-group-item d-flex justify-content-between align-items-center bg-dark">
                                        {character.name}
                                        <span className="badge badge-primary badge-pill">
                                            <a href="#" onClick={() => this.getCharacter(character)} className="text-white">Details</a>
                                        </span>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        {
                            this.state.character.loadedCharacter &&
                            <div>
                                <h3 className="border border-primary rounded p-2">{this.state.character.name}</h3>
                                <p>Gender: {this.state.character.gender}</p>
                                <p>Homeworld: {this.state.character.homeworld}</p>
                                <h5>Films:</h5>
                                <ul className="list-group">
                                    {
                                        this.state.character.films.map((film, i) => {
                                            return <li key={i} className="list-group-item d-flex justify-content-between align-items-center bg-dark">
                                                <Film film={film} />
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Characters;