import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { HeadingTitle } from '../components/heading-title'
import { TextArea } from '../components/text-area'
import type { TaskDto } from '../dto/task-dto'
import { useTasksContext } from '../hooks/useTasksContext'

export function Task() {
  const { tasksList } = useTasksContext()
  const [task, setTask] = useState<TaskDto>()
  const { id } = useParams<{ id: string }>()

  const getTask = useCallback(() => {
    const task = tasksList.find((task) => task.id === id) || {} as TaskDto

    if (!task) {
      return null
    }

    setTask(task)
  }, [tasksList, id])

  useEffect(() => {
    getTask()
  }, [getTask])
  if (!task) {
    return null // Return early if task is not found.
  }

  return (
    <div className="w-full flex flex-col items-center  px-6 gap-8
        lg:bg-white sm:w-9/12 lg:rounded-lg lg:h-4/5
        "
    >

      <HeadingTitle title={task?.title} size="small" />

      <TextArea
        id="description"
        title="Descrição:"
        placeholder="Digite a descrição da tarefa"
        disabled
        value={task?.description}
      />

    </div>
  )
}
