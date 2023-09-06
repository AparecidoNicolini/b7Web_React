import { CountContext } from "@/contexts/CountContext"
import { OnlineUsers } from "./OnlineUsers"
import { useContext } from 'react';

export const Header = () => {
    const count = useContext(CountContext);

    return(
        <header>
            <h1 className="text-3xl">Titulo da pagina - { count?.onlineCount }</h1>
            <OnlineUsers />
        </header>
    )
}