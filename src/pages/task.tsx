import { HeadingTitle } from '../components/heading-title'
import { TextArea } from '../components/text-area'

export function Task() {
  return (

    <div className="w-full flex flex-col items-center  px-6 gap-8
        lg:bg-white sm:w-9/12 lg:rounded-lg lg:h-4/5
        "
    >

      <HeadingTitle title="Titulo da task" size="small" />

      <TextArea
        id="description"
        title="Descrição:"
        placeholder="Digite a descrição da tarefa"
        disabled
      />

    </div>
  )
}
