import { CountContext } from "@/contexts/CountContext"
import { useContext } from "react"

export const OnlineUsers = () => {
    const count = useContext(CountContext);

    const handleBanAll = () => {
        count?.setOnlineCount(0);
    }

    return(
        <>
            <div> Usuarios online:  {count?.onlineCount} </div>
            <button onClick={handleBanAll} className="w-30 h-30 bg-red-600 p-2 text-white rounded-md">Encerrar conexão</button>
        </>
    )
}