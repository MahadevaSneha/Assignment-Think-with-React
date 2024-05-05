const container = document.getElementById('react-container');
ReactDOM.render("Hello! Welcome to React",container);
// Functional component
const Container = () =>{
  return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning`,
     React.createElement(`div`,null,`Let's rock and roll`)
     );
}
// Render the Container
ReactDOM.render(React.createElement(Container),container);
class ReactContainer extends React.Component{
  // constructor - to initialize the state 

  // render method to render the react dom 
    render(){
        return React.createElement(`div`,null,`Hey Kalvians`,
        React.createElement(`div`,null,`Let's rock and roll with classes`)
        );
    }
  
}

ReactDOM.render(React.createElement(ReactContainer),container);
class ReactContainer2 extends React.Component{
    // JSX tags
    // JSX there should be one parent element
      render(){
          return (
          <div>Hello! Welcome to Kalvium   
             <div>Let's rock and roll-this is label</div>
         </div> )
      };  
  }

// Direclty pass the component to render
ReactDOM.render(<ReactContainer2/>,container);
  
