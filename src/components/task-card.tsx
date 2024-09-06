import { Check, Pencil, Trash } from '@phosphor-icons/react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useTasksContext } from '../hooks/useTasksContext'
import { Button } from './button'

interface TaskCardProps {
  id: string
  title: string
  completedTask?: Date | null
}

export function TaskCard({ title, completedTask, id }: TaskCardProps) {
  const { removeTask } = useTasksContext()
  const navigate = useNavigate()

  const isCompletedTask = !!completedTask

  const [isChecked, setIsChecked] = useState<boolean>(isCompletedTask)

  const styleTitle = isChecked
    ? 'text-xl text-gray-400 line-through'
    : 'text-xl text-gray-700'

  function handleCompletedTask() {
    setIsChecked(!isChecked)
  }

  function handleEditTask() {
    navigate(`/edit-task/${id}`)
  }

  function handleRemoveTask() {
    try {
      removeTask(id)
    } catch (error) {
      console.log('🚀 ~ handleRemoveTask ~ error:', error)
    }
  }

  return (
    <div className=" w-full flex  items-center justify-between">
      <button
        onClick={handleCompletedTask}
        className="w-9 h-9
      flex items-center justify-center
      border-success border-2 rounded-lg"
      >
        {isChecked &&
          <Check
            className="text-success"
            fontSize={30}
          />}
      </button>

      <Link to={`task/${id}`} className={styleTitle}>
        {title}
      </Link>

      <div className="flex gap-3">
        <Button.Root
          typeStyle="icons"
          variant="outline"
          onClick={handleRemoveTask}
          className="text-danger"
        >
          <Trash fontSize={30} />
        </Button.Root>
        <Button.Root
          typeStyle="icons"
          variant="outline"
          onClick={handleEditTask}
          className="text-info"
        >
          <Pencil fontSize={30} />
        </Button.Root>
      </div>

    </div>
  )
}
