import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './navbar.css'
import App from './App.jsx'
import Navbar from './Navbar.jsx'
import Header from './Props.jsx'
import TodoList from './curly.jsx'
import Card from './Cards.jsx'
import Profile from './Conditinol.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <App/>
    <Navbar/>
    <Header/>
    <TodoList/>
  </StrictMode>,
)
