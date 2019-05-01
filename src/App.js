import React, { Component } from 'react'
import './App.css';
import UserOutput from './Components/UserOutput';
import UserInput from './Components/UserInput';

class App extends Component {
  state = {
    members: [
     { username: 'Justin', years: 5 },
     { username: 'Jordy', years: 10 }
    ]
  }

  nameChangeHandler = (e) => {
    this.setState({
      members: [
        { username: e.target.value, years: 5 },
        { username: 'Jordy', years: 10 }
      ]
    })
  }

  render () {
    const inputStyle = {
      fontSize: '20px',
      border: '1px black solid',
      borderRadius: '5px',
      padding: '15px',
      margin: '15px auto'

    }
    return (
      <div className="App">
        <h1>Assignment 1</h1>
        <UserInput
          change={this.nameChangeHandler}
          style={inputStyle}
          currentName={this.state.members[0].username}
        />
        <UserOutput
          username={this.state.members[0].username}
          years={this.state.members[0].years}
        />
        <UserOutput
          username={this.state.members[1].username}
          years={this.state.members[1].years}
        />
      </div>
    );
  }
}

export default App;
