import React, {Component} from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom'

import UserCollection from './components/UserCollection';
import CategoryCollection from './components/CategoryCollection';
import NoteCollection from './components/NoteCollection';

const url = "http://localhost:3000/api/v1/users"

class App extends Component {
  state = {
    users: [],
    categories: [],
    notes: [],
    // filteredUser: []
  }

  // //refactor?
  componentDidMount(){
   this.findUser()
   this.findCategory()
   this.findNote()
  }

  findUser(){
    fetch("http://localhost:3000/api/v1/users")
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

  // render() {
  //   return(
  //     <>
  //       {/* <Route path='/categories' render={()=><CategoryCollection category={this.state.categories}/>}/> */}
  //       <UserCollection user={this.state.users}/>
  //     </>
  //   )
  // }
 render(){
   return(
     <Switch>
       <Route exact path="/" render={()=> <UserCollection user={this.state.users}/>}/>
       <Route exact path="/categories/:slug" render={()=><CategoryCollection category={this.state.categories}/>}/>
       <Route exact path="/categories/:slug/notes" render={()=> <NoteCollection note={this.state.notes}/>}/>
     </Switch>
   )
 }
}

export default App;
