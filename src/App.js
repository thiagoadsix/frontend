import React, { useState } from 'react'
import Header from './components/Header'

import './App.css'
import bgImage from './assets/background.jpeg'

function App() {
    const [projects, setProjects] = useState(["Desenvolvimento web", "Desenvolvimento de app"])

    function handleAddProject() {
        setProjects([...projects, `Novo projeto - ${Date.now()}`])
        console.log(projects)
    }

    return (
        <>
            <Header title="Homepage"/>
            <img width={300} src={bgImage}></img>

            <ul>
                {projects.map(project => <li key={project}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App;