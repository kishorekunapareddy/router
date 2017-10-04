import React from 'react';
class App3 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {Name: 'Kishore'};
    }
  
    render() {
      return (
        <div>
          <h1>Hello Everyone</h1>
          <h2>this is {this.state.Name}.</h2>
        </div>
      );
    }
  }
  export default App3;
  
