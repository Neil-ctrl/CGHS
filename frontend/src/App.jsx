import { useState } from 'react'
import Header from './components/Header.jsx'
import Login from './components/login.jsx'
import Register from './components/Register.jsx'
import Home from './components/Home.jsx'
import Discover from './components/Discover.jsx'
import Search from './components/Search.jsx'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [currPage, setCurrPage] = useState('home')
  const [loginStatus, setLoginStatus] = useState('logging in')

  const page = () => {

    if (loginStatus === 'logging in' && !isLogin) {
      return <Login isLogin={isLogin} setIsLogin={setIsLogin} loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
    }
    else if (loginStatus === 'registering' && !isLogin) {
      return <Register loginStatus={loginStatus} setLoginStatus={setLoginStatus} />
    }
    else if (currPage === 'home') {
      return <Home />
    }
    else if (currPage === 'discover') {
      return <Discover />
    }
    else if (currPage === 'search') {
      return <Search />
    }
  }

  return (
    <>
      {isLogin ? <Header currPage={currPage} setCurrPage={setCurrPage} /> : null}
      {page()}
    </>
  )
}

export default App
