import { useState, useEffect } from "react";

function UserProfile() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUserData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
            const userData = await response.json()
            setUser(userData)
        }

        fetchUserData()


        return () => setUser(null)
    }, [])

    return (
        <div id="content">
            {user ? (
                <div>
                    <h5>Nome: {user.name}</h5>
                    <h5>Email: {user.email}</h5>
                    <hr />
                </div>
            ) : (
                <div>
                    <p>Carregando perfil de Usuário</p>
                    <hr />
                </div>
                
            )}
        </div>
    )
}

export default UserProfile