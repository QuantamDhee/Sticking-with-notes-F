import React from 'react'
import UserCard from './UserCard'

const UserCollection = (props) =>{

    // return (
    //     <div>
    //         This is the User#index
    //     </div>
    // )

    const renderUser = () => {
        return props.user.map(use => <UserCard use={use} key={use.id}/>)
    }
    return (
        <div id ="user-collection">
            {renderUser()}
        </div>
    )
}

export default UserCollection