import React, {Component} from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom'

import UserCollection from './components/UserCollection';
import CategoryCollection from './components/CategoryCollection';
import NoteCollection from './components/NoteCollection';
import NoteForm from './components/NoteForm';

// const url = "http://localhost:3000/api/v1/users"

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

  addNote = note =>{
    let configObj = {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(note)
    }
    fetch('http://localhost:3000/api/v1/notes', configObj)
    .then(r=>r.json())
    .then(data=>{
      this.setState({
        notes: [...this.state.notes, data.note]
      })
    })
  }
 render(){
   return(
     <Switch>
       <Route exact path="/" render={()=> <UserCollection user={this.state.users}/>}/>
       <Route exact path="/categories" render={()=><CategoryCollection category={this.state.categories}/>}/>
       <Route exact path="/categories/notes" render={()=> <NoteCollection note={this.state.notes}/>}/>
       <Route exact path="/notes/create" render={()=> <NoteForm categories={this.state.categories} addNote={this.addNote}/>}/>
     </Switch>
   )
 }
}

export default App;
