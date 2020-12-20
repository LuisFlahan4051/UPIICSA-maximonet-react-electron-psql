import React from 'react'
import Login from './Login'
import { useSelector, RootStateOrAny } from 'react-redux'
import { gql, useQuery } from '@apollo/client'

/* Types needed for Apollo query */
interface User {
    nickname: string
}

interface UserData {
    users: User[]
}

const USERS_FROM_SUCURSAL = gql`query users{
    users{
        nickname
    }
}`


function Index() {
   
    /*--- get Redux data using hook from store. reducer current User is called ---*/ 
    const currentUser = useSelector((state: RootStateOrAny) => state.currentUser)
    console.log(currentUser.root)
    /*--- for set data we need another hook from react-redux ---*/

    const { loading, error, data } = useQuery<UserData>(USERS_FROM_SUCURSAL)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    
    var usersList: string[] = []
    
    data && data.users.map(User =>{
        return usersList.push(User.nickname)
    })
    
    return (
        <div className="Index-login">
            <Login users={usersList} />
        </div>
    )
}

export default Index;