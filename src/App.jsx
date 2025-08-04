import { useState } from 'react'
import './App.css'
import Home from './home';
import Chat from './chat';


function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <div>
        {page === 'home' && <Home goToChat={() => setPage('chat')} />}
        {page === 'chat' && <Chat goToHome={() => setPage('home')} />}
      </div>
    </>
  )
}

export default App;
