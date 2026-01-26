import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { projects } from './data';
import ProjectDetail from './ProjectDetail';



function App() {
  /* Dark Theme */
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);
  return (
    <Router>
      <div className="portfolio min-h-screen flex flex-col">
        <header className="flex justify-between items-center border-b border-border-custom py-4 mb-8">
          <h1 className="text-xl">Cheng Yun Lee</h1>
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
                  <div className="w-full aspect-[16/9] md:h-[300px] overflow-hidden bg-border-custom">
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
        <footer className="py-8 text-center text-sm text-gray-500">
          <div className="container mx-auto px-4">
            <p>© {new Date().getFullYear()} Cheng Yun Lee</p>
            <p className="mt-2 text-xs opacity-75">
              Icons by <a href="https://icons8.com" target="_blank" rel="noreferrer" className="hover:text-teal-600 transition-colors">Icons8</a> & <a href="https://flaticon.com" target="_blank" rel="noreferrer" className="hover:text-teal-600 transition-colors">Flaticon</a>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
