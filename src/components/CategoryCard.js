import React from 'react'
import {Link} from 'react-router-dom'

class CategoryCard extends React.Component{
    render(){
        const {name} = this.props.cat
        return(
            <div>
                <div className="CategoryCard">
                    
                        <h2> {name} </h2>
                    
                </div>
            </div>
        )
    }
}

export default CategoryCard