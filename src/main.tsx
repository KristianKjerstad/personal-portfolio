import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProjectPage } from './ProjectPage.tsx'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.layer.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider>
            <BrowserRouter basename="/personal-portfolio">
                <Routes>
                    <Route path="/" Component={App} />
                    <Route
                        path="/projects/:projectName"
                        Component={ProjectPage}
                    />
                </Routes>
            </BrowserRouter>
        </MantineProvider>
    </React.StrictMode>
)
