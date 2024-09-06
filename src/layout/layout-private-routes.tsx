import { Outlet } from 'react-router-dom'

import { TasksProvider } from '../contexts/tasks-context'

export default function LayoutPrivateRoutes() {
  return (
    <div className="h-screen bg-white">
      <TasksProvider>
        <Outlet />
      </TasksProvider>
    </div>
  )
}
