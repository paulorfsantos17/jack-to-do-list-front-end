import { Route } from 'react-router-dom'

import DefaultLayout from '../layout/default'
import { Login } from '../pages/login'
import { Register } from '../pages/register'

export function PublicRoutes() {
  return (
    <>
      <Route path="/auth" element={<DefaultLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </>
  )
}
