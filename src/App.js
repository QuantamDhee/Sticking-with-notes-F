import React, {Component} from 'react';
import './App.css';

import UserCollection from './components/UserCollection';

const url = "http://localhost:3000/api/v1/users"

class App extends Component {
  state = {
    users: [],
    filteredUsers: []
  }

  componentDidMount(){
    fetch(url)
    .then(r=>r.json())
    .then(userData=>this.setState({
      users:userData
    }))
  }
  render() {
    return(
      <>
        <UserCollection user={this.state.filteredUsers}/>
      </>
    )
  }
}

export default App;
