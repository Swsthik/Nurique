import React, { useState,useEffect } from 'react';
import Todolist from '../components/TodoList';
import Sidebar from '../components/Sidebar';

const TaskPage = () => {
  // Assume you have task data to pass to the DyslexiaTask component

  const dyslexiaLevel = 10

  // useEffect(() => {
  //   getuserList();
  // }, []);
  
  
  // useEffect(() => {
  //   // const dyslexiaLevel = userList[0].score
  //   console.log("dislexiaaaaaaaaaa",userList)
  //   if(userList[0]){
  //     dyslexiaLevel = userList[0].score
  
  //   let links = [];
  //   if (dyslexiaLevel >= 9) {
  //     links = lowDyslexiaGames;
  //   } else if (dyslexiaLevel >= 7) {
  //     links = medDyslexiaGames;
  //   } else {
  //     links = highDyslexiaGames;
  //   }
    
  //   setGameLinks(links);
  // }
  // }, [dyslexiaLevel]);

  return (
    <div className='flex flex-row w-screen'>
      <Sidebar />
    <div className="text-center w-full flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold mb-4">Task Page</h1>

      {/* Render the DyslexiaTask component with the taskData */}
      <Todolist dis={dyslexiaLevel} />
    </div>
    </div>
  );
};

export default TaskPage;