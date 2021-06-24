import React from 'react'
import {Link} from 'react-router-dom'

class NoteCard extends React.Component{
    render(){
        const {name, description} = this.props.n
        return(
            <div>
                <div className="NoteCard">
                    
                        <h2> {name} </h2>
                        <h3> {description}</h3>
                    
                </div>
            </div>
        )
    }
}

export default NoteCard