import { Routes, Route } from 'react-router-dom'
import DefaultLayout from '../layout/default'
import { Login } from '../pages/login'

export function PublicRouters() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Login />} />

      </Route>
    </Routes>
  )
}
