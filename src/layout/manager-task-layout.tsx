import { Outlet } from 'react-router-dom'

import { SideBar } from '../components/sidebar'
import { TasksProvider } from '../contexts/tasks-context'

export function ManagerTaskLayout() {
  return (
    <div className="h-screen bg-white">
      <TasksProvider>
        <SideBar />
        <Outlet />
      </TasksProvider>
    </div>
  )
}
