import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// No StrictMode: its dev-only double mount runs GradientASCII's cleanup, which
// calls loseContext() and leaves every WebGL canvas dead on the second mount.
createRoot(document.getElementById('root')).render(<App />)
