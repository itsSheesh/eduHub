import React from 'react'
import ReactDOM from 'react-dom/client'

// import Home from './pages/Home.tsx'

import './index.css'
import "./assets/fonts/Yekan.ttf"
import GPAForm from './features/GpaCalculator.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Home/> */}
    <GPAForm />
  </React.StrictMode>,
)
