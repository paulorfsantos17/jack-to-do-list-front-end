import { Check, Pencil, Trash } from '@phosphor-icons/react'
import { useState } from 'react'

import { Button } from './button'

export function TaskCard() {
  const [isChecked, setIsChecked] = useState<boolean>(true)
  const styleTitle = isChecked
    ? 'text-xl text-gray-400 line-through'
    : 'text-xl text-gray-700'

  function handleCompletedTask() {
    setIsChecked(!isChecked)
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

      <span className={styleTitle}>
        Titulo da Tarefa
      </span>

      <div className="flex gap-3">
        <Button.Root
          typeStyle="icons"
          variant="outline"
          className="text-danger"
        >
          <Trash fontSize={30} />
        </Button.Root>
        <Button.Root
          typeStyle="icons"
          variant="outline"
          className="text-info"
        >
          <Pencil fontSize={30} />
        </Button.Root>
      </div>

    </div>
  )
}
