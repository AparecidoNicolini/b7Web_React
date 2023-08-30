"use client"

import { QuestionItem } from '@/components/QuestionItem';
import { questions } from '@/data/questions';
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const title = "Quiz de Informática";

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnsered = (answer: number) => {};

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='w-full max-w-lg bg-white rounded-md shadow shadow-black'>
        <div className='p-3 font-bold text-2xl border-b border-gray-300'> {title} </div>
        <div className='p-3'>
          <QuestionItem
          question={questions[currentQuestion]}
          count={currentQuestion + 1}
          onAnswer={handleAnsered}        
        /></div>
        <div className='p-5 text-center border-t border-gray-300'>Pergunta {currentQuestion + 1} de {questions.length} pergunta{questions.length === 1 ? '' : 's'}</div>
      </div>
    </div>
  )
}
