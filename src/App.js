import React, {Component} from 'react';
import './App.css';

import {Route} from 'react-router-dom'

import UserCollection from './components/UserCollection';
import CategoryCollection from './components/CategoryCollection';

const url = "http://localhost:3000/api/v1/users"

class App extends Component {
  state = {
    users: [],
    categories: [],
    notes: [],
    // filteredUser: []
  }

  //refactor?
  componentDidMount(){
   this.findUser()
   this.findCategory()
   this.findNote()
  }

  findUser(){
    fetch(url)
    .then(r=>r.json())
    .then(userData=>this.setState({
      users:userData,
    }))
  }

  findCategory(){
    fetch("http://localhost:3000/api/v1/categories")
    .then(r=>r.json())
    .then(catData=>this.setState({
      categories:catData,
    }))
  }

  findNote(){
    fetch("http://localhost:3000/api/v1/notes")
    .then(r=>r.json())
    .then(noteData=>this.setState({
      notes: noteData,
    }))
  }

  render() {
    return(
      <>
        {/* <CategoryCollection category={this.state.categories}/> */}
        <UserCollection user={this.state.users}/>
      </>
    )
  }
}

export default App;
