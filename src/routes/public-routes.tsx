import { Route, Routes } from 'react-router-dom'

import DefaultLayout from '../layout/default'
import { Login } from '../pages/login'
import { Register } from '../pages/register'

export function PublicRouters() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/auth" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
    </Routes>
  )
}
