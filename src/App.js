import React, {Component} from 'react';
import './App.css';

import {Route, Switch, withRouter} from 'react-router-dom'

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
    selectedNote: null
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

  selectNote = note => {
    this.setState({
      selectedNote: note
    })
    this.props.history.push(`/note/${note.id}/edit`)
  }

  updateNote = note => {
    let configObj = {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(note)
    }
    fetch(`http://localhost:3000/api/v1/notes/${this.state.selectedNote.id}`, configObj)
    .then(r=>r.json())
    .then(data=>{
      // console.log(data)
      this.setState({
        notes: this.state.notes.map(note => {
          if(note.id === data.id){
            return data
          }else{
            return note
          }
        })
      })
    })
    this.props.history.push("/categories/notes")
  }
  // deleteNote = note => {
  //   let configObj = {
  //     method: "Delete",
  //     headers: { 
  //       "Content-Type": "application/json" ,
  //       "Accept": "application/json" 
  //   },

  //   }
  //   fetch(`http://localhost:3000/api/v1/notes/${this.state.selectedNote.id}`, configObj)
  //   .then(r=>r.json())
  //   .then(data=>{
  //     // console.log(data)
  //     this.setState({
  //       notes: this.state.notes.map(note => {
  //         if(note.id === data.id){
  //           return data
  //         }else{
  //           return note
  //         }
  //       })
  //     })
  //   })
  //   this.props.history.push("/categories/notes")
  // }
  //  deleteNote = (note, parentNode) => {
  //    let configObj = {
  //     method: "DELETE",
  //     headers: { 
  //       "Content-Type": "application/json",
  //       "Accept": "application/json" 
  //     },

  //   }
  //   fetch(`http://localhost:3000/api/v1/notes/${note}`, configObj)
  //   .then(r => r.json())
  //   .then(parentNode.remove())
    //  }
   
    deleteNote = note => {
      let deleteUrl = `http://localhost:3000/api/v1/notes/${note.id}`
      fetch(deleteUrl, {
        method: "DELETE",
      })
      .then(()=>{
        let notes = this.state.notes
        let index = notes.indexOf(note)
        notes.splice(index, 1)
        this.setState({
          notes: notes
        })
      })
    }


 render(){
   return(
     <Switch>
       <Route exact path="/" render={()=> <UserCollection user={this.state.users}/>}/>

       <Route exact path="/categories" render={()=><CategoryCollection category={this.state.categories}/>}/>

       <Route exact path="/categories/notes" render={()=> <NoteCollection selectNote={this.selectNote} note={this.state.notes} deleteNote={this.deleteNote}/>}/>

       <Route exact path="/note/:id/edit" render={() => <NoteForm users={this.state.users} categories={this.state.categories} addNote={this.updateNote} />}/>

       <Route exact path="/notes/create" render={()=> <NoteForm users={this.state.users} categories={this.state.categories} addNote={this.addNote}/>}/>

     </Switch>
   )
 }
}

export default withRouter(App);
