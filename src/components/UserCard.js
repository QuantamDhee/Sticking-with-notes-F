import React from 'react'
import {Link} from 'react-router-dom'

class UserCard extends React.Component{
    render(){
        const {name} = this.props.use
        return(
            <div>
                <div className="UserCard">
                    
                        <Link to='/' className='user-example' ><h2> {name} </h2></Link>
                    
                </div>
            </div>
        )
    }
}

export default UserCard