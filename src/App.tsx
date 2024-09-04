import './index.css'

import { BrowserRouter } from 'react-router-dom'

import { PublicRouters } from './routes/public-routes'

function App() {
  return (
    <BrowserRouter>
      <PublicRouters />
    </BrowserRouter>

  )
}

export default App
