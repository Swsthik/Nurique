import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DyslexiaTodoList = ({dis}) => {
  const [tasks, setTasks] = useState([
    { id: 1, question: 'Go to training games , we have a task for you ' },
    { id: 2, question: 'Solve a mathematical problem.' },
    { id: 3, question: 'Identify the misspelled words in a sentence.' },
    { id: 4, question: 'Write a short story using specific words.' },
    { id: 5, question: 'Listen to a word and spell it.' },
  ]);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const navigate = useNavigate()

  const handleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  useEffect(() => {
    // Check if all tasks are completed
    const allTasksCompleted = tasks.every((task) => task.completed);

    // Update isButtonActive based on the completion status
    setIsButtonActive(!allTasksCompleted);
  }, [tasks]); // Run the effect when the tasks state changes

  const handleSubmit = () => {
    // Add your submission logic here
    console.log('Tasks submitted!');
    navigate(`/dashboard/profile/${true}`)
  };

  return (
    <div className="max-w-full mx-auto mt-8 p-8 border rounded-md bg-gray-100 shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Todo List Day 1</h2>

      <ul className="list-disc pl-6">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={task.completed || false}
              onChange={() => handleTaskCompletion(task.id)}
              className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className={`${task.completed ? 'line-through text-gray-500' : 'text-black'}`}>
              {task.question}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-4 p-2  text-white rounded-md ${
          !isButtonActive ? 'bg-indigo-600' : 'bg-gray-400 cursor-not-allowed'
        }`}
        onClick={handleSubmit}
        disabled={isButtonActive}
      >
        Submit Tasks
      </button>
    </div>
  );
};

export default DyslexiaTodoList;
