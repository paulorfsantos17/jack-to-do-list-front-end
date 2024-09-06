import { createContext, ReactNode, useEffect, useReducer } from 'react'

import type { createTaskDTO } from '../dto/create-task-dto'
import type { EditTaskDTO } from '../dto/edit-task-dto'
import type { TaskDto } from '../dto/task-dto'
import { completedTaskFromApi } from '../http/completed-task'
import { createTaskFromApi } from '../http/create-task'
import { deleteTaskFromApi } from '../http/delete-task '
import { fetchAllTasks } from '../http/fetch-all-task'
import { updateTaskFromApi } from '../http/update-task'
import {
  addTaskAction,
  completedTasksAction,
  editTaskAction,
  removeTasksAction,
  setTasksAction,
} from '../reducers/tasks/actions'
import { tasksReducer } from '../reducers/tasks/reducer'

interface TasksContextType {
  tasksList: TaskDto[]
  addTask: (createTask : createTaskDTO) => void
  removeTask: (taskId : string) => void
  completedTask: (taskId : string) => void
  updateTask: (taskEdit : EditTaskDTO) => void
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

  async function removeTask(taskId : string) {
    await deleteTaskFromApi(taskId)
    dispatch(removeTasksAction(taskId))
  }

  async function completedTask(taskId : string) {
    await completedTaskFromApi(taskId)
    dispatch(completedTasksAction(taskId))
  }
  async function updateTask(taskEdit : EditTaskDTO) {
    console.log('🚀 ~ updateTask ~ taskEdit:', taskEdit)
    await updateTaskFromApi(taskEdit)
    dispatch(editTaskAction(taskEdit))
  }

  useEffect(() => {
    fetchTasksFromAPI()
  }, [])
  return (
    <TasksContext.Provider value={{
      tasksList: tasksListState.tasksList,
      addTask,
      removeTask,
      completedTask,
      updateTask,
    }}
    >
      {children}
    </TasksContext.Provider>
  )
}
