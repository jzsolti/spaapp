import React from 'react';
import {Link} from "react-router-dom";

class Planets extends React.Component {

	constructor() {
		super();

		this.state = {
			planets: [],
			loaded: false

		}
	}

	componentWillMount() {

		const url = `https://swapi.dev/api/planets/`;
		fetch(url)
			.then(response => response.json())
			.then(data => {

				this.setState({
					planets: data.results,
					loaded: true
				})

			})
	}

	render() {

		return (
			<div>
				{

					this.state.loaded ?
						<table className="table table-dark">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Population</th>
									<th scope="col">Gravity</th>
									<th scope="col">Rotation period</th>
								</tr>
							</thead>
							<tbody>
								{

									this.state.planets.map((planet, i) => {
										return <tr key={i}>
											<th scope="row">{planet.name}</th>
											<td>{planet.population}</td>
											<td>{planet.gravity}</td>
											<td>{planet.rotation_period}</td>
											<td>
												<Link to={`/planets/${(i + 1)}`}>Detail {planet.name}</Link>
											</td>
										</tr>
									})

								}
							</tbody>
						</table>
						:
						<div className="spinner-border" role="status">
							<span className="sr-only">Loading </span>
						</div>
				}

			</div>

		)
	}
}
export default Planets;