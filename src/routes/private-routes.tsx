import { Route } from 'react-router-dom'

import DefaultLayout from '../layout/default'
import { ManagerTask } from '../pages/manager-task'

export function PrivateRoutes() {
  return (
    <>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<ManagerTask />} />
      </Route>
    </>
  )
}
