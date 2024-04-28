import React from 'react';
import Sidebar from '../components/Sidebar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Profile() {

  const isCompleteProfile = location.pathname.endsWith('/true');

  return (
  <div className=' w-full h-auto flex flex-row '>
    <Sidebar className='fixed'/>
  <main class="profile-page w-full  mr-auto " >
  <section class="relative top-0 bg-blueGray-200 pt-32">
    <div class="container mx-auto px-4">
      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg  ">
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div class="relative">
                <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" class="shadow-xl rounded-full h-auto align-middle border-none absolute -mt-24 ml-24 lg:ml-32 max-w-150-px"/>
              </div>
            </div>
            <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              
            </div>
           
          </div>
          <div class="text-center mt-12">
            <h3 class="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2">
              Dheeraj dileep
            </h3>
            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              PROFILE
            </div>
            
      
          </div>
         
        </div>
      </div>
    </div>
  
  </section>
  <div className='flex justify-center items-center flex-row gap-[20rem]'>
    <div className='flex justify-center items-center w-26'>
      <h1 className='text-3xl font-bold text-indigo-600'>{isCompleteProfile ? `Congratulations ! ` : 'Way more to go chief'}</h1>
    </div>

    <div style={{ width: 300, height: 300 }} className='flex justify-center items-center  pt-20'>
            <CircularProgressbarWithChildren value={isCompleteProfile ? 100 : 0} strokeWidth={8}>
              <div style={{ fontSize: 20, marginTop: -5 }}>
                <span className='flex justify-center items-center'>
                  <strong>{isCompleteProfile ? 100 : 0}%</strong>
                </span>
                <strong>Daily progress</strong>
              </div>
            </CircularProgressbarWithChildren>
          </div>
    </div>
</main>

    </div>
  );
}

export default Profile;
