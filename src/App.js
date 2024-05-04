// app.js
import React from 'react';
import ReactDOM from 'react-dom';
class ReactContainer extends React.Component {
  render() {
      return (
          <div>
              Hello! Welcome to Kalvium
              <div>This is Babel</div>
          </div>
      );
  }
}

const container = document.getElementById('react-container');
ReactDOM.render(<ReactContainer />, container);

// Functional component
const Container = () =>{
  return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
     React.createElement(`div`,null,`Let's rock and roll`)
     );
}
// Render the Container
ReactDOM.render(React.createElement(Container),container);
