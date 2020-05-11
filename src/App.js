import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {alterStateFunction} from './redux/geese'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      otherText: ''
    }
  }
  render(){
    return (
      <div className="App">
        This is my app
    </div>
  );
}
}

export default App;
