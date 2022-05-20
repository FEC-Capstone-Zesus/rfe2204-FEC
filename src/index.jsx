// Bring React in to build a component
import React from "react";
// Import from react-dom the ability to create a root render
import { createRoot } from "react-dom/client";
// Create the root of the app by selection where the app should be mounted in the dom
const root = createRoot(document.getElementById("root"));

// base App component
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <h1>Hello World!</h1>
    );
  }
};

root.render(<App />);

// "start" will tell webpack to bundle our code development
// "build" will tell webpack to bundle our code for production
// To run these commands all you need to do is run yarn [command] replacing [command] with the script name you want to run.
