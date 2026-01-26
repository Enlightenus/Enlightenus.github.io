import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { projects } from './data';
import ProjectDetail from './ProjectDetail';
import ReactMarkdown from 'react-markdown'
import './App.css'

const myContent = `
Welcome to my Portfolio

### Tech
- Vite + React
- JavaScript

---

---
<p style="font-size:11px">Page template forked from <a href="https://github.com/evanca/quick-portfolio">evanca</a></p>
<p style="font-size:11px">Icon from <a href="https://Vecteezy.com">Vecteezy</a></p>

`
// src/App.jsx

function App() {
  /* Dark Theme */
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);
  return (
    <Router>
      <div className="portfolio">
        <header sclassName="site-header">
          <h1>Cheng Yun Lee</h1>
          <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                onChange={() => setIsDark(!isDark)}
                checked={isDark}
              />
              <div className="slider round">
                <span className="icon">{isDark ? '🌙' : '☀️'}</span>
              </div>
            </label>
          </div>
          <nav>
            {/* More pages */}
          </nav>

        </header>

        <Routes>
          {/* Cards */}
          <Route path="/" element={
            <main className="project-grid">
              {projects.map((item) => (
                <div key={item.id} className="project-card">
                  <div className="card-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="card-content">
                    <h3>{item.title}</h3>
                    <div className="tags">
                      {item.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <p>{item.description}</p>
                    {/* Links to the project page*/}
                    <Link to={`/project/${item.id}`} className="view-link">
                      Read Full Project →
                    </Link>
                  </div>
                </div>
              ))}
            </main>
          } />

          {/* Project */}
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <footer className="site-footer">
          <p>© 2026 Enlightenus Portfolio</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
