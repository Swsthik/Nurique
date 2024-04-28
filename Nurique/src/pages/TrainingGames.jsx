import React, { useState, useEffect } from 'react';
import GameComponent from '../components/GameComponent';
import Sidebar from '../components/Sidebar';
import {
  getDocs,
  collection,
} from "firebase/firestore";
import { db } from '../firebase/config'
// import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth"
import { app } from '../firebase/config';

import { highDyslexiaGames, medDyslexiaGames, lowDyslexiaGames } from '../data/data';
// Import other necessary dependencies

const TrainingGames = () => {
  const [gameLinks, setGameLinks] = useState([]);
  const [userList, setuserList] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const auth = getAuth(app);
  // const dysl
  let dyslexiaLevel;


  const getuserList = async () => {
    try {
      const data = await getDocs(usersCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })).filter((doc) => doc.userId === auth.currentUser.uid);
      setuserList(filteredData);
      console.log(userList)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getuserList();
  }, []);
  
  
  useEffect(() => {
    // const dyslexiaLevel = userList[0].score
    console.log("dislexiaaaaaaaaaa",userList)
    if(userList[0]){
      dyslexiaLevel = userList[0].score
  
    let links = [];
    if (dyslexiaLevel >= 8 && dyslexiaLevel <=9) {
      links = lowDyslexiaGames;
    } else if (dyslexiaLevel >= 7) {
      links = medDyslexiaGames;
    } else {
      links = highDyslexiaGames;
    }
    
    setGameLinks(links);
  }
  }, [dyslexiaLevel,userList]);

  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="flex justify-between items-center w-full p-24 h-full">
        <div className="flex flex-row w-full h-screen">
          {gameLinks.map((link, index) => (
            <GameComponent key={index} githubLink={link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainingGames;
