import { useEffect, useRef } from 'react'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import swal from 'sweetalert2'
import { client } from '../../assets/apollo/apolloClient'
import { validate } from 'graphql'
import { nextTick } from 'process'
import { valueToObjectRepresentation } from '@apollo/client/utilities'

interface ValidateUser {
    id: string
    nickname: string
    password: string
    admin: boolean
    root: boolean
}

const VALIDATE_USER = gql`query VALIDATE_USER($userData: String, $password: String){
    validateUser(userData: $userData, password: $password){
        id
        nickname
        password
        admin
        root
    }
}`



function Index() {
    
    const [getValidation, { loading, error, data }] = useLazyQuery<ValidateUser>(VALIDATE_USER, {
        variables: { userData: "luisflahan", password: "4051" },
    })
    var validateUser = JSON.parse(JSON.stringify(data))

    /* if (validateUser.validateUser !== null) {
        console.log("Data is not null")
    } else {
        console.log(validateUser.validateUser)
    } */


    function Entry(e: { preventDefault: () => void }) {
        getValidation()
        console.log(validateUser.validateUser)
    }

    return (
        <div>
            <button onClick={Entry}>
                Click me to print!
            </button>
        </div>
    )
}

export default Index;