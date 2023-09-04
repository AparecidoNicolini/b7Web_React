import { Question } from "@/type/Question"
import { useState } from "react";

type Props = {
    question: Question;
    count: number;
    onAnswer: (answer:number) => void;
}

export const QuestionItem = ({question, count, onAnswer}: Props) => {

    const [selectedAnswer, setSelectedAnswer] = useState <number|null> (null);


    const checkQuestion = (key:number) => {
        if(selectedAnswer === null) {
            setSelectedAnswer(key);
            onAnswer(key);
        }
    }

    return (
        <div>
            <div className="font-bold text-2xl mb-5">{count}. {question.question}</div>
            <div>
                {question.options.map((item, key)=> (
                    <div
                    key={key}
                    onClick={() => checkQuestion(key)}
                    className={`border border-blue-300 px-3 py-2 rounded-md text-lg mb-4 bg-blue-100
                    ${selectedAnswer !== null ? 'cursor-auto' : 'cursor-pointer hover:opacity-60'}
                    ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-300 border-green-500'}
                    ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-300 border-red-500'}
                    ${selectedAnswer !== null && question.answer === key && 'bg-green-300 border-green-500'}
                    `}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}