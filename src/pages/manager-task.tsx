import { Plus } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../components/button'
import { HeadingTitle } from '../components/heading-title'
import { TaskCard } from '../components/task-card'
import { useTasksContext } from '../hooks/useTasksContext'
import useWindowSize from '../hooks/useWindowSize'

export function ManagerTask() {
  const navigate = useNavigate()
  const { tasksList } = useTasksContext()
  const { width } = useWindowSize()

  const isScreenMd = width > 768
  const buttonTypeStyle = isScreenMd
    ? 'default'
    : 'icons'

  const isEmptyTaskList = tasksList.length === 0

  function handleNavigateAddTask() {
    navigate('add-task')
  }

  return (
    <div className="lg:bg-gray-400 h-screen
      flex justify-center  items-center"
    >
      <div className="w-full h-full flex flex-col justify-start
          py-10 px-6 gap-8 lg:bg-white sm:w-9/12 lg:rounded-lg
          lg:h-4/5
        "
      >
        <div className="flex flex-col items-center gap-4">

          <HeadingTitle title="Suas Tarefas" size="small" />
        </div>
        <div className="w-full flex justify-end">
          <Button.Root
            variant="success"
            typeStyle={buttonTypeStyle}
            onClick={handleNavigateAddTask}
          >
            {isScreenMd && <Button.Title title="Adicionar" />}
            <Plus
              fontSize={40}
              className="text-white"
            />

          </Button.Root>
        </div>

        {isEmptyTaskList && (
          <p className="text-2xl text-center mt-28">
            A lista de tarefas está vazia adicione uma tarefa
          </p>
        )}

        <div className="flex flex-col gap-6">
          {tasksList.map(task =>
            <TaskCard
              key={task.id}
              title={task.title}
              completedDateTask={task.completionDate}
              id={task.id}
            />,
          )}
        </div>
      </div>
    </div>
  )
}
