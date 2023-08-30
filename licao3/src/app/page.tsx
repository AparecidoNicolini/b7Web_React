import Image from 'next/image'
import { Emoji } from './components/emoji';

export default function Home() {
  
  let result = '';

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <Emoji rate={5}/>
    </div>
  )
}
