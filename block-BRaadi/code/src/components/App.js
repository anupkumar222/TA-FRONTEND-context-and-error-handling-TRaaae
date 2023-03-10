import React from "react";
import ErrorBoundry from "./ErrorBoundry";
import Header from "./Header";
import Main from "./Main";

class App extends React.Component {
  state = {isDarkMode:''}
  render() {
    let { isDarkMode } = this.state;
    return (
      <>
      <ErrorBoundry>
      <Header isDarkMode={isDarkMode} />
      <Main isDarkMode={isDarkMode} />
      </ErrorBoundry>

   

      </>
    );
  }
}

export default App;
