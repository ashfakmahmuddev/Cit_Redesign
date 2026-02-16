
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayouts from './components/layouts/RootLayouts'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayouts/>}/>
        <Route index element={<RootLayouts/>}/>
      </Routes>
    </>
  )
}

export default App
