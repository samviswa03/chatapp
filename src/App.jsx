import { useState } from 'react'
import './App.css'
import Navbar from './navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Footer from './footer';
// import waren from './assets/wbufet.png';
import chatui from '../src/assets/chatui.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <div className='md:w-[1000px] flex flex-col justify-center items-center md:h-fit md:mx-auto'>
          <div className='sticky mt-56 p-4 flex flex-col w-full md:w-full'>
            <h1 className='font-bold text-2xl md:text-4xl'>Chat app</h1>
            <div className='flex items-center gap-5 md:justify-between w-full mt-3'>
              <img src="https://i.postimg.cc/6qnNKVzc/wbufet.jpg" className='w-16 h-16 md:h-24 md:w-24 rounded-full' alt="logo" />
              <p className='md:text-xl' >Waran Bufet</p>
              <p className='md:text-xl'>Available to work</p>
              <FontAwesomeIcon icon={faHeart} className=" text-pink-600 outline-2 outline-gray-300  p-1 rounded-full text-lg" />
              <button className='bg-black rounded-full p-1 text-white' >Get in touch</button>
            </div>
          </div>
          <div className='w-full md:w-[750px] lg:w-[1000px] md:h-[500px] lg:h-[800px] md:mx-auto md:rounded-xl h-fit p-6 flex items-center justify-center mt-6 bg-gray-200'>
            <img src={chatui} className='md:w-xl lg:w-4xl' alt="" />
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
