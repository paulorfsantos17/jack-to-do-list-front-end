import { Routes as RoutesReactRouter } from 'react-router-dom'

import { PrivateRoutes } from './private-routes'
import { PublicRoutes } from './public-routes'

export function Routes() {
  return (
    <RoutesReactRouter>
      {PrivateRoutes()}
      {PublicRoutes()}
    </RoutesReactRouter>
  )
}
