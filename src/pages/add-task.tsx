import { Plus, X } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../components/button'
import { HeadingTitle } from '../components/heading-title'
import { Input } from '../components/input'
import { TextArea } from '../components/text-area'
import useWindowSize from '../hooks/useWindowSize'

export function AddTask() {
  const navigate = useNavigate()
  const { width } = useWindowSize()

  const isScreenMd = width < 1024

  function handleNavigateManagerTask() {
    navigate('/')
  }

  return (
    <div className="lg:bg-gray-400 h-screen
    flex justify-center lg:items-center "
    >
      <div className="w-full flex flex-col items-center  py-10 px-6 gap-8
        lg:bg-white sm:w-9/12 lg:rounded-lg lg:h-4/5
        "
      >
        {isScreenMd && (
          <div className="w-full flex justify-end">
            <Button.Root
              variant="outline"
              typeStyle="closed"
              onClick={handleNavigateManagerTask}
            >
              <X
                fontSize={40}
                weight="bold"
                className="text-gray-700"
              />
            </Button.Root>
          </div>
        )}

        <HeadingTitle title="Nova Tarefa" size="small" />
        <form className="w-full flex flex-col gap-6">
          <Input
            id="title"
            title="Titulo:"
            placeholder="Digite o titulo da tarefa"
          />
          <TextArea
            id="description"
            title="Descrição:"
            placeholder="Digite a descrição da tarefa"
          />

          <div className="w-full flex justify-end gap-6">
            <Button.Root
              variant="danger"
              onClick={handleNavigateManagerTask}
            >
              <Button.Title title="Cancelar" />
            </Button.Root>
            <Button.Root variant="success">
              <Button.Title title="Adicionar" />
              {!isScreenMd && <Plus fontSize={30} className="text-white" />}
            </Button.Root>

          </div>
        </form>

      </div>
    </div>
  )
}
