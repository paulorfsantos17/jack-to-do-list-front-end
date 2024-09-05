import { X } from '@phosphor-icons/react'

import { Button } from '../components/button'
import { HeadingTitle } from '../components/heading-title'
import { TextArea } from '../components/text-area'

export function Task() {
  return (
    <div className="lg:bg-gray-400 h-screen
    flex justify-center lg:items-center "
    >
      <div className="w-full flex flex-col items-center  py-10 px-6 gap-8
        lg:bg-white sm:w-9/12 lg:rounded-lg lg:h-4/5
        "
      >

        <div className="w-full flex justify-end">
          <Button.Root
            variant="outline"
            typeStyle="closed"
          >
            <X
              fontSize={40}
              weight="bold"
              className="text-gray-700"
            />
          </Button.Root>
        </div>

        <HeadingTitle title="Titulo da task" size="small" />

        <TextArea
          id="description"
          title="Descrição:"
          placeholder="Digite a descrição da tarefa"
          disabled
        />

      </div>
    </div>
  )
}
