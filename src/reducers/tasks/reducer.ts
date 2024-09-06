import type { TaskDto } from '../../dto/taskDto'
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
    default:
      return state
  }
}
