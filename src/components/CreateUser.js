import React, { useContext } from 'react'
import { AuthContext } from '../authentication/auth'

const CreateUser = () => {
    const auth = useContext(AuthContext)
    return (
        <>
            {JSON.stringify(auth.createUser)}
            <button onClick={() => {
                auth.createUser.createUser('example@example.com', 'Ab123456')
            }}> Criar Usuário</button>
        </>
    )
}

export default CreateUser