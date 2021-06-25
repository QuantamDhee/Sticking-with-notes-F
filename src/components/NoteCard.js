import React from 'react'
import {Link} from 'react-router-dom'

class NoteCard extends React.Component{
    render(){
        const {name, description} = this.props.n
        return(
            <div className="ui link cards">
                <br/>
                <div className="card">
                    <div className="header">
                        <h3>{name}</h3>
                    </div>
                    <div className="description">
                        {description}
                    </div>
                    <button onClick={() => this.props.selectNote(this.props.n)}>EDIT</button>
                </div>
            </div>
        )
    }
}

export default NoteCard