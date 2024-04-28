import React, { useState } from 'react';

const wordPairs = [
  { word1: 'cat', word2: 'cot', answer: false },
  { word1: 'dad', word2: 'dad', answer: true },
  { word1: 'bat', word2: 'bet', answer: false },
];

function Compare({onComplete,setScore}) {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);

  const currentPair = wordPairs[currentPairIndex];

  const handleAnswerSubmission = () => {
    // Check if the user's answer matches the correct answer
    if (userAnswer === currentPair.answer) {
      setUserScore(userScore + 1);
    }

    // Move to the next word before updating the score
    if (currentPairIndex + 1 < wordPairs.length) {
      setCurrentPairIndex(currentPairIndex + 1);
      setUserAnswer(null);
    } else {
        console.log("wordcompare",userScore)
      // End of the comparison, show the score in an alert
      setScore((prev)=>prev+userScore)
      onComplete();
    //   alert(`Comparison completed! Your score: ${userScore + (userAnswer === currentPair.answer ? 1 : 0)}/${wordPairs.length}`);
    }
  };

  return (
    <div className='flex justify-center items-center w-full flex-col min-h-screen bg-gray-100'>
      <h1 className='text-3xl font-bold text-emerald-700 my-6'>
        Are these both words the same?
      </h1>
      <div className='bg-white shadow-lg p-8 rounded-md w-96 flex flex-col justify-center items-center'>
        <span className='text-md font-semibold'>Question {currentPairIndex+1}</span>
        <div className='flex justify-center flex-row gap-4 text-2xl font-bold mb-6'>
          <div className='border-b border-indigo-500'>{currentPair.word1}</div>
          <div className='border-b border-indigo-500'>{currentPair.word2}</div>
        </div>
        <div className='flex justify-center'>
          <label className='mr-4'>
            <input
              type='radio'
              name='answer'
              value={true}
              checked={userAnswer === true}
              onChange={() => setUserAnswer(true)}
            />
            <span className='ml-2'>Yes</span>
          </label>
          <label>
            <input
              type='radio'
              name='answer'
              value={false}
              checked={userAnswer === false}
              onChange={() => setUserAnswer(false)}
            />
            <span className='ml-2'>No</span>
          </label>
        </div>
        <div className='flex justify-center mt-8'>
          <button
            onClick={handleAnswerSubmission}
            className='bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300'
          >
            Submit Answer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Compare;
