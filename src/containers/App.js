import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import '../containers/App.css';

class App extends Component {
	constructor() {
		super();
		// Initialize the state of the app with required data. Generally set to nothing.
		this.state = {
			robots: [],
			searchField: '',
		};
	}

	// component to fetch data from an external data source
	componentDidMount() {
		// calls the url specified then returns the raw data then we add it the robots state property
		// so it can relay the data to the rest of the app.
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((users) => this.setState({ robots: users }));
	}

	// eventhandler for the search box
	onSearchChange = (event) => {
		// setState - always use this before working on any data to update the new data to state
		this.setState({ searchField: event.target.value });
	};

	// Render to the front end for user to use.
	render() {
		// destructering to remove the use of this.state in every variable placeholder
		const { robots, searchField } = this.state;

		// filtering the robots based on search field input
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

		// Checking to see if the state data retrieval has completed if not show
		// a loading sign so that end user nows the app is still processing.
		return !robots.length ? (
			<h1>Robofriends is loading...</h1>
		) : (
			// display the main page of the app/
			<div className='tc'>
				<h1 className='f1'>RoboFriends - ZTM</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}

export default App;
