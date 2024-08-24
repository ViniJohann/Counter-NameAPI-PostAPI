import { useState } from "react"
import "./App.css"
import TimerComponent from "./components/LifeCycle"
import UserProfile from "./components/User"
import NewsUpdater from "./components/NewsUpdater"
import Header from "./components/Header"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <TimerComponent/>
    <UserProfile/>
    <NewsUpdater/>
    </>
  )
}

export default App
