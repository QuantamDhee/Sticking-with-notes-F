import React from 'react'
import NoteCard from './NoteCard'
import {Link} from 'react-router-dom'

class NoteCollection extends React.Component{

    // const renderNote = () => {
        //     return props.note.map(n => <NoteCard n={n} key={n.id}/>)
        // }
    render(){
        return (
        <div>
            <br/>
            <div className="ui three column grid">
                {this.props.note.map(n => <NoteCard deleteNote={this.props.deleteNote} selectNote={this.props.selectNote} n={n} key={n.id}/>)}
            </div>
        <br/>
            <div>
                <Link to='/notes/create' className='notes-create'> <button className= 'ui button'>Create Notes</button></Link>
            </div>  
        </div>
        )
    }
}

// className="ui three column grid"

export default NoteCollection