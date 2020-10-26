import React, { Component } from "react";

const ErrorBoundary = (WrappedComponent) => {
  return class extends Component {
    state = { hasError: false };
    static getDerivedFromError() {
      return {
        hasError: true,
      };
    }
    componentDidCatch(error, info) {
      console.log("error", error);
      console.log("info", info);
    }
    render() {
      const { hasError } = this.state;
      if (hasError) {
        <div>Somthing went wrong please go back to HOME</div>;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
  export default ErrorBoundary;
};
