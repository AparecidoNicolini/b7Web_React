import { StudentsTable } from '@/components/StudentsTable'
import { students } from '@/data/students'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='container mx-auto w-screen h-screen'>
      <h1 className='text-center text-4xl mb-5'>Lista de estudantes</h1>
      <StudentsTable students={students}/>
    </div>
  )
}
