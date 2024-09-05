import { Navigate, Route, Routes as RoutesReactRouter } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'
import { PrivateRoutes } from './private-routes'
import { PublicRoutes } from './public-routes'

export function Routes() {
  const isAuth = useAuth()
  return (
    <RoutesReactRouter>
      {PublicRoutes()}
      {isAuth && PrivateRoutes()}
      {!isAuth &&
        <Route
          path="*" element={<Navigate to="/auth" replace />}
        />}
    </RoutesReactRouter>
  )
}
