import { useState } from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Discover from './components/Discover.jsx'
import Search from './components/Search.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [isLogin, setIsLogin] = useState(true)
  const [currPage, setCurrPage] = useState('home')

  const page = () => {
    if (currPage === 'home') {
      return <Home />
    } else if (currPage === 'discover') {
      return <Discover />
    } else if (currPage === 'search') {
      return <Search />
    }
  }

  return (
    <>
      <Header currPage={currPage} setCurrPage={setCurrPage} />
      {isLogin ? page() : <h1>Please Log In to continue</h1>}
    </>
  )
}

export default App
