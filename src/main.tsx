import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import stars from '/public/stars.jpg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProjectPage } from './ProjectPage.tsx'

console.log(stars)
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter basename="/personal-portfolio">
            <Routes>
                <Route path="/" Component={App} />
                <Route path="/projects/:projectName" Component={ProjectPage} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
