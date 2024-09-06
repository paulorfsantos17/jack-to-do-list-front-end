import type { TaskDto } from '../../dto/task-dto'
import type { Actions } from './actions'

interface TasksListState {
  tasksList: TaskDto[]
}

export function tasksReducer(
  state:TasksListState,
  action : Actions,
): TasksListState {
  switch (action.type) {
    case 'SET_TASKS':
      return {
        tasksList: action.payload.tasks,
      }
    case 'ADD_TASK': {
      return {
        ...state,
        tasksList: [...state.tasksList, action.payload.task],
      }
    }
    case 'REMOVE_TASKS': {
      const tasksList = state.tasksList.filter(
        (task) => task.id !== action.payload.taskId,
      )
      return {
        ...state,
        tasksList,
      }
    }
    default:
      return state
  }
}
