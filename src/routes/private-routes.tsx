import { Route } from 'react-router-dom'

import LayoutPrivateRoutes from '../layout/layout-private-routes'
import { AddTask } from '../pages/add-task'
import { EditTask } from '../pages/edit-task'
import { ManagerTask } from '../pages/manager-task'
import { Task } from '../pages/task'

export function PrivateRoutes() {
  return (
    <>

      <Route
        path="/" element={<LayoutPrivateRoutes />}
      >
        <Route path="/" element={<ManagerTask />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/edit-task/:id" element={<EditTask />} />
        <Route path="/task/:id" element={<Task />} />
      </Route>

    </>
  )
}
