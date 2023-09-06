import { LoggedUserContext } from "@/contexts/LoggedUser"
import { useContext } from "react"

export const Header = () => {
    const loggedUser = useContext(LoggedUserContext);

    const handleLogout = () => {
        loggedUser?.setName('');
    }

    return (
        <header>
            {loggedUser?.name && 
                <>
                <h1>Usuario logado</h1>
            <p>{loggedUser?.name}</p>
            <button onClick={handleLogout}>Sair</button>
            </>
            }
            {(!loggedUser || loggedUser?.name === '') &&
                <p>Fazer login</p>
            }
        </header>
    )
}