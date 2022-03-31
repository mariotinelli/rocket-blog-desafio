import Home from "./components/Home"
import Section from "./components/Section"
import GlobalStyle from "./globalStyles"

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
    return (
        <>
          <Router>
            <GlobalStyle />
            <Home />
            <Section />
            <Routes>
              <Route path="/" element={<h1> </h1>} />
              <Route path="/" element={<h1> </h1>} />
              <Route path="/" element={<h1> </h1>} />
              <Route path="/" element={<h1> </h1>} />
            </Routes>
          </Router>
        </>
    )
}

export default App
