// ErrorBoundary.js
import React, { Component } from 'react';
import NotFound from '../../pages/NotFound/NotFound';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Handle errors here, e.g., log the error or perform additional actions
    console.error(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Display the "Not Found" page when an error occurs
      return <NotFound />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
