"use client"

import { QuestionItem } from '@/components/QuestionItem';
import { Results } from '@/components/Results';
import { questions } from '@/data/questions';
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const title = "Quiz de Informática";

  const [answers, setAnswers] = useState <number[]> ([]);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showResult, setShowResult] = useState(false);

  const loadNextQuestion = () => {
    if(questions[currentQuestion +1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  const handleAnsered = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  };

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='w-full max-w-lg bg-white rounded-md shadow shadow-black'>
        <div className='p-3 font-bold text-2xl border-b border-gray-300'> {title} </div>
        <div className='p-3'>
        {!showResult &&
          <QuestionItem
          question={questions[currentQuestion]}
          count={currentQuestion + 1}
          onAnswer={handleAnsered}        
        />
        }
        {showResult && 
          <Results questions={questions} answers={answers}/>
        }
        </div>
        <div className='p-5 text-center border-t border-gray-300'>
          {!showResult && `Pergunta ${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}`}
          {showResult && 
            <button className='px-3 py-2 rounded-md bg-blue-800 text-white'>Reiniciar o Quiz</button>
          }
        </div>
      </div>
    </div>
  )
}
