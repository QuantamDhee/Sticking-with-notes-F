import React from 'react'
import {Link} from 'react-router-dom'

class CategoryCard extends React.Component{
    render(){
        const {name} = this.props.cat
        return(
            <div>
                <div className="CategoryCard">
                    
                <Link to='/categories/notes' className='category-example' ><h2> {name} </h2></Link>
                    
                </div>
            </div>
        )
    }
}

export default CategoryCard