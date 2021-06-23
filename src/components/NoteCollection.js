import React from 'react'
import NoteCard from './NoteCard'

const NoteCollection = (props) =>{

    const renderNote = () => {
        return props.note.map(n => <NoteCard n={n} key={n.id}/>)
    }
    return (
        <div id ="note-collection">
            {renderNote()}
        </div>
    )
}

export default NoteCollection