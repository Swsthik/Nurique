import React, { useState, useEffect } from 'react';

const assessmentWords = ['arg5sdg', 's656rg', 'd3f43', 'fv235',''];
// const assessmentWords = ['a','b',''];

function Wordpuzzle({onComplete,setScore}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');

  const currentWord = assessmentWords[currentWordIndex];

  const handleAnswerSubmission = () => {
    if (userAnswer.toLowerCase() === currentWord.toLowerCase()) {
      setUserScore((prevScore) => prevScore + 1);
    }

    if (currentWordIndex + 1 < assessmentWords.length) {
      setCurrentWordIndex((prevIndex) => prevIndex + 1);
      setUserAnswer('');
    }
  };

  useEffect(() => {
    if (currentWordIndex === 4) {
      console.log("user", userScore);
      onComplete();
      setScore((prev)=>prev+userScore)
      
    }
  }, [currentWordIndex, userScore]);
//   if(currentWordIndex)

  return (
    <div className='flex justify-start items-center pt-36 w-full text-4xl font-bold flex-col'>
      <div>
        <h1 className='text-indigo-600 '> Write the given word in the input box </h1>
        <div className='bg-slate-200 h-full flex flex-col justify-start items-center gap-y-10 p-10 mt-10 rounded-2xl'>
          <span className='text-lg'>Question {currentWordIndex+1} </span>
          <h1 className="text-2xl uppercase tracking-wide font-semibold text-center bg-gray-200 py-2 px-4 rounded  text-stroke">
            {currentWord}
          </h1>
          <div className='flex flex-col justify-center items-center gap-y-10 '>
            <input
              type='text'
              name='userAnswer'
              id='userAnswer'
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className='border-2 rounded-xl'
            />
            <button onClick={handleAnswerSubmission} className='text-sm bg-indigo-600 text-white rounded-xl w-36 p-5'>
              Submit Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wordpuzzle;
