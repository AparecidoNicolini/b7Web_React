"use client"

import { Header } from "@/componentes/Header"
import { LoggedUserProvider } from "@/contexts/LoggedUser";

const Page = () => {
  return (
    <div>
      <LoggedUserProvider>
      <Header/>
      </LoggedUserProvider>
    </div>
  )
}

export default Page;