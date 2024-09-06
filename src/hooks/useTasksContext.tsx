import { useContext } from 'react'

import { TasksContext } from '../contexts/tasks-context'

export const useTasksContext = () => {
  const context = useContext(TasksContext)
  return context
}
