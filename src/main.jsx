import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Profile from './profile.jsx'
import About from './about.jsx'
import CertificateShowcase from './certificate.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <div className="no-scrollbar page-scroll-container">
      <Profile
        name="Elena Vance"
        role="Senior Frontend Dev"
        onFollow={() => alert('Followed!')}
      />
      <About />

      {/* Added id="projects-section" */}
      <div id="projects-section" className="pinned-track">
        <div className="pinned-frame">
          <App />
        </div>
      </div>

      {/* Added id="certificates-section" */}
      <div id="certificates-section">
        <CertificateShowcase />
      </div>
    </div>
  </StrictMode>
)