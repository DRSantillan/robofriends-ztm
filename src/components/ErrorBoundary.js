import React, { Component } from 'react';

class ErrorBoundady extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
		};
	}

	componentDidCatch(error,info) {
		this.setState({ hasError: true });
	}

	render() {
		if (this.state.hasError) {
			return <h1>Oooops! This doesn't look good!</h1>;
		}
		return this.props.children;
	}
}

export default ErrorBoundady;
