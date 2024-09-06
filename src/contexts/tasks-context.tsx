import { createContext, ReactNode, useEffect, useReducer } from 'react'

import type { TaskDto } from '../dto/taskDto'
import { fetchAllTasks } from '../http/fetchAllTasks'
import { actionsTypes } from '../reducers/tasks/actions'
import { tasksReducer } from '../reducers/tasks/reducer'

interface TasksContextType {
  tasksList: TaskDto[]
}

interface TasksProviderProps {
  children: ReactNode
}

export const TasksContext = createContext<TasksContextType>({ tasksList: [] })

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasksListState, dispatch] = useReducer(
    tasksReducer,
    { tasksList: [] },

  )

  function setTasks(tasks: TaskDto[]) {
    dispatch({
      type: actionsTypes.SET_TASKS,
      payload: { tasks },
    })
  }

  async function fetchTasksFromAPI() {
    try {
      const tasks = await fetchAllTasks()

      setTasks(tasks)
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }

  useEffect(() => {
    fetchTasksFromAPI()
  }, [])
  return (
    <TasksContext.Provider value={{ tasksList: tasksListState.tasksList }}>
      {children}
    </TasksContext.Provider>
  )
}
