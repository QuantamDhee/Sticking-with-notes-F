import React from 'react'
// import {Link} from 'react-router-dom'

class NoteCard extends React.Component{

    handleDelete = () => {
        this.props.deleteNote(this.props.n)
        // this.props.deleteNote(this.props.note.id, e.target.parentNode)
    }
    render(){
        const {name, description} = this.props.n
        return(
            <div className="ui fluid cards">
                <br/>
                <div className="card">
                    <div className="header">
                        <h3>{name}</h3>
                    </div>
                    <div className="description">
                        {description}
                    </div>
                    <button onClick={() => this.props.selectNote(this.props.n)}>EDIT</button>
                    <button onClick={e => this.handleDelete()} className="ui icon button"><i className="trash alternate icon"></i></button>
                </div>
            </div>
        )
    }
}

export default NoteCard