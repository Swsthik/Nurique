import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Sidebar from './components/Sidebar'
import Profile from './pages/Profile'
import Assesment from './pages/Assesment'
import TaskPage from './pages/TaskPage'
import TrainingGames from './pages/TrainingGames'

function App() {

  const tru = true;

  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/dashboard/profile' element={<Profile/>}/>
        <Route path='/dashboard/profile/true' element={<Profile/>}/>
        <Route path='/dashboard/assessment' element={<Assesment/>}/>
        <Route path='/dashboard/tasks' element={<TaskPage/>}/>
        <Route path='/dashboard/traininggames' element={<TrainingGames/>}/>
      </Routes>
    </div>
  )
}

export default App