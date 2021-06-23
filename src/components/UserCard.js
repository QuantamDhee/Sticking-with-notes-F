import React from 'react'

class UserCard extends React.Component{
    render(){
        const {name} = this.props.use
        return(
            <div>
                <div className="UserCard">
                    
                        <h2> {name} </h2>
                    
                </div>
            </div>
        )
    }
}

export default UserCard