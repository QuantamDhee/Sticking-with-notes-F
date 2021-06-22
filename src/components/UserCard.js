import React from 'react'

class UserCard extends React.Component{
    render(){
        const {name} = this.props.use
        return(
            <div>
                <div className="UserCard">
                    <li>
                        <h2> {name}</h2>
                    </li>
                </div>
            </div>
        )
    }
}

export default UserCard