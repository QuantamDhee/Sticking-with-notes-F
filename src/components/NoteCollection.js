import React from 'react'
import NoteCard from './NoteCard'

class NoteCollection extends React.Component{

    // const renderNote = () => {
        //     return props.note.map(n => <NoteCard n={n} key={n.id}/>)
        // }
    render(){
        return (
            <div>
                {this.props.note.map(n => <NoteCard deleteNote={this.props.deleteNote} selectNote={this.props.selectNote} n={n} key={n.id}/>)}
                {/* {renderNote()} */}
            </div>
        )
    }
}

// className="ui three column grid"

export default NoteCollection