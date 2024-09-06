import { createContext, ReactNode, useEffect, useReducer } from 'react'

import type { createTaskDTO } from '../dto/create-task-dto'
import type { TaskDto } from '../dto/task-dto'
import { createTaskFromApi } from '../http/create-task'
import { fetchAllTasks } from '../http/fetch-all-task'
import { addTaskAction, setTasksAction } from '../reducers/tasks/actions'
import { tasksReducer } from '../reducers/tasks/reducer'

interface TasksContextType {
  tasksList: TaskDto[]
  addTask: (createTask : createTaskDTO) => void
}

interface TasksProviderProps {
  children: ReactNode
}

export const TasksContext = createContext({ } as TasksContextType)

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasksListState, dispatch] = useReducer(
    tasksReducer,
    { tasksList: [] },

  )

  function setTasks(tasks: TaskDto[]) {
    dispatch(setTasksAction(tasks))
  }

  async function fetchTasksFromAPI() {
    try {
      const tasks = await fetchAllTasks()

      setTasks(tasks)
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }

  async function addTask(taskCreate : createTaskDTO) {
    const task = await createTaskFromApi(taskCreate)
    dispatch(addTaskAction(task))
  }

  useEffect(() => {
    fetchTasksFromAPI()
  }, [])
  return (
    <TasksContext.Provider value={{
      tasksList: tasksListState.tasksList,
      addTask,
    }}
    >
      {children}
    </TasksContext.Provider>
  )
}
