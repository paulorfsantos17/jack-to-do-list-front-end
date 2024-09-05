import { Plus } from '@phosphor-icons/react'

import { Button } from '../components/button'
import { HeadingTitle } from '../components/heading-title'
import { TaskCard } from '../components/task-card'
import useWindowSize from '../hooks/useWindowSize'

export function ManagerTask() {
  const { width } = useWindowSize()

  const isScreenMd = width > 768
  const buttonTypeStyle = isScreenMd
    ? 'default'
    : 'icons'

  return (
    <div className="lg:bg-gray-400 h-screen
    flex justify-center  items-center"
    >
      <div className="w-full flex flex-col  py-10 px-6 gap-8
        lg:bg-white sm:w-9/12 lg:rounded-lg lg:h-4/5
        "
      >
        <div className="flex flex-col items-center gap-4">

          <HeadingTitle title="Suas Tarefas" size="small" />
        </div>
        <div className="w-full flex justify-end">
          <Button.Root variant="success" typeStyle={buttonTypeStyle}>
            {isScreenMd && <Button.Title title="Adicionar" />}
            <Plus
              fontSize={40}
              className="text-white"
            />

          </Button.Root>
        </div>

        <div className="flex flex-col gap-6">
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    </div>
  )
}
