import { Route } from 'react-router-dom'

import DefaultLayout from '../layout/default'
import { AddTask } from '../pages/add-task'
import { ManagerTask } from '../pages/manager-task'

export function PrivateRoutes() {
  return (
    <>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<ManagerTask />} />
        <Route path="/add-task" element={<AddTask />} />

      </Route>
    </>
  )
}
