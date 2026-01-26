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
            <main className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 py-8">
              {projects.map((item) => (
                <div key={item.id} className="bg-card border border-border-custom rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-custom group">

                  {/* Card Image */}
                  <div className="w-full h-[300px] overflow-hidden bg-border-custom">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="m-0 mb-2 min-h-[3rem] flex items-start text-h3 font-bold text-xl">
                      {item.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4 min-h-[25px]">
                      {item.tags.map(tag => (
                        <span key={tag} className="bg-tag-bg text-tag-text px-2.5 py-1 rounded font-semibold text-[11px]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="m-0 mb-6 text-[0.95rem] leading-6 grow text-muted">
                      {item.description}
                    </p>

                    {/* Links */}
                    <Link
                      to={`/project/${item.id}`}
                      className="text-tag-text font-medium hover:underline inline-flex items-center gap-1 mt-auto"
                    >
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
