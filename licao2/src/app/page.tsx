import Image from 'next/image'

export default function Home() {
  const fullTime = new Intl.DateTimeFormat('pt-BR', {timeStyle: 'short', hour12: false}).format();
  const hour = new Date().getHours();

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className='text-9xl'>{fullTime} </div>
      <div className='text-5xl'>
        {hour >= 0 && hour < 12 && "Bom dia"}
        {hour >= 12 && hour < 18 && "Boa tarde"}
        {hour >= 18 && hour < 23 && "Boa noite"}
      </div>
    </div>
  )
}