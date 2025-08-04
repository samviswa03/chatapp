import { useState } from 'react';
import vijay from './assets/vijay.jpeg';
import master from './assets/master.jpeg';
import pokkiri from './assets/pokkiri.jpeg';
import vintage from './assets/vintage.jpeg';
import sachin from './assets/sachin.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Chat({ goToHome }) {
  

  return (
  <div className="flex h-screen w-full bg-gray-100 p-4 font-sans sm:p-6 md:p-8">
    <div className="mx-auto flex h-full w-full rounded-2xl bg-white">
      <aside className="hidden w-[340px] border-r border-gray-200 bg-white lg:flex lg:flex-col">
       <button onClick={goToHome} className='ml-5 text-3xl mt-4 bg-blue-300 w-fit p-3 rounded-e-full'><FontAwesomeIcon icon={faArrowLeft}  /></button>
        <div className="flex flex-col items-center p-6 text-center">
          <div className="relative">
            <img src={vijay} alt="" className="h-28 w-28 rounded-full" />
            <span className="absolute bottom-1 right-1 block h-5 w-5 rounded-full border-2 border-white bg-green-500"></span>
          </div>
          <h2 className="mt-4 text-xl font-semibold text-gray-800">Vijay</h2>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-800">Friends Online</h3>
            <span className="rounded-full bg-gray-100 px-2 py-1 text-sm font-semibold text-gray-500">23</span>
          </div>
          <div className="mt-4 flex space-x-2 overflow-hidden">
            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={master} alt="Friend" />
            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={pokkiri} alt="Friend" />
            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={vintage} alt="Friend" />
            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src={sachin} alt="Friend" />
          </div>
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto p-6">
          <h3 className="font-bold text-gray-800">Chats</h3>
          <div className="mt-4">
            <input type="text" placeholder="Search chat" className="w-full rounded-lg bg-gray-100 py-2 pl-4 pr-4 focus:outline-none focus:ring-1 focus:ring-indigo-400" />
          </div>
          <div className="mt-4 flex-1 space-y-2 overflow-y-auto">
            <div className="flex cursor-pointer items-center space-x-3 rounded-lg p-2 hover:bg-gray-50">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=128&q=80" alt="John Shinoda" className="h-12 w-12 rounded-full" />
              <div className="flex-1">
                <h4 className="font-semibold">John Shinoda</h4>
                <p className="truncate text-sm text-gray-500">Hey man, how R U???...</p>
              </div>
              <span className="text-xs text-gray-400">08:30</span>
            </div>
            <div className="flex cursor-pointer items-center space-x-3 rounded-lg bg-indigo-50 p-2">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80" alt="Dina Harrison" className="h-12 w-12 rounded-full" />
              <div className="flex-1">
                <h4 className="font-semibold">Dina Harrison</h4>
                <p className="truncate text-sm text-gray-500">Hey, call me please...</p>
              </div>
              <span className="text-xs text-gray-400">12:31</span>
            </div>
             <div className="flex cursor-pointer items-center space-x-3 rounded-lg p-2 hover:bg-gray-50">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=128&q=80" alt="Mandy Guoles" className="h-12 w-12 rounded-full" />
                <div className="flex-1">
                  <h4 className="font-semibold">Mandy Guoles</h4>
                  <p className="truncate text-sm text-gray-500">Let me be alone, please...</p>
                </div>
                <span className="text-xs text-gray-400">16:43</span>
            </div>
            <div className="flex cursor-pointer items-center space-x-3 rounded-lg p-2 hover:bg-gray-50">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&q=80" alt="Sam Pettersen" className="h-12 w-12 rounded-full" />
                <div className="flex-1">
                  <h4 className="font-semibold">Sam Pettersen</h4>
                  <p className="truncate text-sm text-gray-500">Hey dude, where is my...</p>
                </div>
                <span className="text-xs text-gray-400">18:29</span>
            </div>
          </div>
        </div>
      </aside>

    
      <main className="flex flex-1 flex-col bg-gray-50">
        <header className="items-center justify-between border-b border-gray-200 bg-white p-5 md:flex">
          <div>
            <p className="text-sm text-gray-500">Chat with</p>
            <h2 className="text-xl font-bold text-gray-800">Dina Harrison</h2>
          </div>
          <div className="hidden items-center space-x-4 md:flex">
            <span className="text-gray-500">20 March 2021</span>
          </div>
        </header>

        <div className="flex-1 space-y-6 overflow-y-auto p-6">
          <div className="flex items-end gap-3">
            <div className="rounded-lg rounded-bl-none bg-white p-3 shadow-sm">
              <p>Hey Travis, would U like to drink some coffe with me?)</p>
            </div>
          </div>
          <div className="flex items-end justify-end gap-3">
            <div className="rounded-lg rounded-br-none bg-indigo-500 p-3 text-white shadow-sm">
              <p>Shure! At 11:00 am ?</p>
            </div>
          </div>
          <div className="flex items-end gap-3">
            <div className="rounded-lg rounded-bl-none bg-white p-3 shadow-sm">
              <p>Emm, no. Maybe at 10? Cuz I have to finish my home work. My professor is jackass…</p>
            </div>
          </div>
          <div className="flex items-end justify-end gap-3">
            <div className="max-w-md rounded-lg rounded-br-none bg-indigo-500 p-3 text-white shadow-sm">
              <p>Wow, i heard that he is nerd, but never that he is a jackass. Anyway at 10 is ok, Would be my motivation get up earlier 😉</p>
            </div>
          </div>
          <div className="flex items-end gap-3">
            <div className="max-w-md rounded-lg rounded-bl-none bg-white p-3 shadow-sm">
              <p>Yay! I have a tons stories about that man..Ok, have a nice evening, see ya!</p>
            </div>
          </div>
           <div className="flex items-end justify-end gap-3">
            <div className="rounded-lg rounded-br-none bg-indigo-500 p-3 text-white shadow-sm">
              <p>See ya 👋</p>
            </div>
          </div>
        </div>

        <footer className="flex-shrink-0 border-t border-gray-200 bg-white p-4">
          <div className="flex items-center space-x-4">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=128&q=80" alt="You" className="h-12 w-12 flex-shrink-0 rounded-full" />
            <div className="relative flex-1">
              <input type="text" placeholder="Type your message" className="w-full rounded-lg bg-gray-100 py-3 pl-4 pr-16 focus:outline-none focus:ring-1 focus:ring-indigo-400" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button className="ml-2 flex-shrink-0 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">
                  Send
                </button>
              </div>
            </div>
          </div>
        </footer>
      </main>

  
      <aside className="hidden w-[320px] flex-shrink-0 flex-col border-l border-gray-200 bg-white p-6 md:flex">
        <div className="flex flex-col items-center text-center">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80" alt="Dina Harrison" className="h-28 w-28 rounded-full" />
          <h2 className="mt-4 text-xl font-semibold text-gray-800">Dina Harrison</h2>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-800">Shared Files</h3>
            <button className="text-sm font-semibold text-indigo-600">see all</button>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex items-center space-x-3 rounded-lg bg-gray-50 p-2">
              <div className="h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-200"><img src="https://images.unsplash.com/photo-1600096194534-95cf5ece1469?auto=format&fit=crop&w=100&q=60" alt="file" className="h-full w-full rounded-lg object-cover" /></div>
              <div className="flex-1">
                <p className="text-sm font-semibold">PhotoDanver.jpg</p>
                <p className="text-xs text-gray-500">10.03.2021 at 11:43</p>
              </div>
              <span className="text-xs text-gray-500">175 Kb</span>
            </div>
            <div className="flex items-center space-x-3 rounded-lg bg-gray-50 p-2">
              <div className="h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gray-200"><img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=100&q=60" alt="file" className="h-full w-full rounded-lg object-cover" /></div>
              <div className="flex-1">
                <p className="text-sm font-semibold">PhotoDanver.jpg</p>
                <p className="text-xs text-gray-500">07.03.2021 at 10:23</p>
              </div>
              <span className="text-xs text-gray-500">175 Kb</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-800">Shared Links</h3>
            <button className="text-sm font-semibold text-indigo-600">see all</button>
          </div>
          <div className="mt-4 space-y-3">
             <div className="flex items-center space-x-3 rounded-lg bg-gray-50 p-2">
                <div className="flex-1">
                    <p className="text-sm font-semibold">Dribbble.com</p>
                    <p className="text-xs text-gray-500">10.12.2020</p>
                </div>
            </div>
             <div className="flex items-center space-x-3 rounded-lg bg-gray-50 p-2">
                <div className="flex-1">
                    <p className="text-sm font-semibold">W. Awwwards.com</p>
                    <p className="text-xs text-gray-500">10.12.2020</p>
                </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
);
}

export default Chat;
