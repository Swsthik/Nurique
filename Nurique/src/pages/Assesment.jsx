import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Wordpuzzle from '../components/Wordpuzzle';
import Compare from '../components/Compare';
import Sound from '../components/Sound';
import { db, auth } from '../firebase/config';
import { setDoc, collection, getDocs,doc, updateDoc } from "firebase/firestore";
import {  useNavigate } from 'react-router-dom';

function Assessment() {
  const [currentStep, setCurrentStep] = useState('wordpuzzle');
  const [score, setScore] = useState(0);
  const [userList, setuserList] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const navigate = useNavigate();

  const handleWordpuzzleComplete = () => {
    setCurrentStep('compare');
  };

  const handleCompareComplete = () => {
    setCurrentStep('sound');
  };

  const handleSoundcomplete = () => {
    setCurrentStep('alldone');
  };

  const updateScore = async () => {
    try {
      setCurrentStep('null');
      const data = await getDocs(usersCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })).filter((doc) => doc.userId === auth.currentUser.uid);

      setuserList(filteredData);
      console.log("filtered data", filteredData); 
      console.log(userList)// Logs the filtered data immediately

      // Other code...
    } catch (error) {
      console.error("Error updating score:", error);
    }
  };

  useEffect(() => {
    console.log("Updated userList", userList);

    const yourAsyncFunction = async () => {
        if(userList[0]){
          await updateDoc(doc(db, "users",userList[0].id), {
            // Your data for the document
            score : score,
        }
  )}
        }

    yourAsyncFunction();
    
  }, [userList]);
    
  useEffect(() => {
    if (currentStep === 'alldone') {
      updateScore();
      navigate('/dashboard/tasks')
    }
  }, [currentStep]);

  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div className='w-full flex justify-center items-center'>
        {currentStep === 'wordpuzzle' && (
          <Wordpuzzle onComplete={handleWordpuzzleComplete} setScore={setScore} />
        )}
        {currentStep === 'compare' && (
          <Compare onComplete={handleCompareComplete} setScore={setScore}/>
        )}
        {currentStep === 'sound' && <Sound onComplete={handleSoundcomplete} setScore={setScore}/>}
      </div>
    </div>
  );
}

export default Assessment;
