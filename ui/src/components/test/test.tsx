import { gql, useLazyQuery } from '@apollo/client'

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
    
    const [getValidation, { data }] = useLazyQuery<ValidateUser>(VALIDATE_USER, {
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