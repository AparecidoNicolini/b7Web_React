"use client"

import { Header } from "@/components/Header";
import { CountProvider } from "@/contexts/CountContext";

const Page = () => {
  return (
    <div className="container mx-auto w-screen h-screen">
      <CountProvider>
        <Header />
      </CountProvider>
    </div>
  );
}

export default Page;