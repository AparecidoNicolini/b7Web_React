import Image from 'next/image'
import Emoji from './components/Emoji'

export default function Home() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Emoji rate={5}></Emoji>
    </div>
  )
}