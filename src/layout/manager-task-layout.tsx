import { Outlet } from 'react-router-dom'

import { SideBar } from '../components/sidebar'
import { TasksProvider } from '../contexts/tasks-context'

export function ManagerTaskLayout() {
  return (
    <div className="h-screen w-screen bg-white lg:flex">
      <TasksProvider>
        <SideBar />
        <div className="w-full flex justify-center mt-10">
          <Outlet />
        </div>
      </TasksProvider>
    </div>
  )
}
