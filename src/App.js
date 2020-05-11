import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {alterStateFunction} from './redux/geese'
import {Route, Switch} from 'react-router-dom'
import Chicken from './component/Chicken'
import Apple from './component/Apple'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      propStuff: 'passing the prop to chicken'
    }
    this.buttonFunction = this.buttonFunction.bind(this)
  }
  buttonFunction(){
    this.props.alterStateFunction()
  }
  render(){
    console.log(this.props)
    return (
      <div className="App">
        This is my app
        <button onClick={() => this.buttonFunction()}>Click to Redux</button>
        <Chicken propStuff={this.state.propStuff}/>
        <Switch>
          <Route path='/apple' component={Apple} />
        </Switch>
    </div>
  );
}
}

const mapDispatchToProps = {alterStateFunction}

const mapStateToProps = state => state

export default connect(mapStateToProps, mapDispatchToProps)(App)