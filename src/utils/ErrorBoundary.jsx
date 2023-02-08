// reactjs.org/docs/error-boundaries.html

import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    console.error(`error boundary caught en error: ${error} ${info}`);
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorComponent;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
