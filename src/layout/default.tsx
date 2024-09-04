import { Outlet } from 'react-router-dom'

export default function DefaultLayout() {
  return (
    <div className="h-screen bg-white">
      <Outlet />
    </div>
  )
}
