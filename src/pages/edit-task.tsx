import { Pencil } from '@phosphor-icons/react'
import {
  type ChangeEvent,
  type MouseEvent,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '../components/button'
import { HeadingTitle } from '../components/heading-title'
import { Input } from '../components/input'
import { TextArea } from '../components/text-area'
import type { EditTaskDTO } from '../dto/edit-task-dto'
import { useTasksContext } from '../hooks/useTasksContext'
import useWindowSize from '../hooks/useWindowSize'
import { validateForms } from '../utils/validation'

const editTaskFormSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().min(5, 'Título tem que ter no mínimo 5 caracteres.'),
  description: z.string()
    .min(3, 'Description precisa conter no mínimo 3 caracteres')
    .max(100, 'Description precisa conter no máximo 100 caracteres'),
})

type EditTaskFormSchema = z.infer<typeof editTaskFormSchema>

export function EditTask() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { tasksList, updateTask } = useTasksContext()
  const { width } = useWindowSize()

  const [formData, setFormData] = useState<EditTaskFormSchema>({
    id: '',
    title: '',
    description: '',
  })

  const [errorsValidation, setErrorsValidation] =
  useState<Partial<EditTaskFormSchema >>({})

  const [errorsRequest, setErrorRequest] =
  useState<string>('')

  const isEmptyTaskList = tasksList.length > 0

  const getTask = useCallback(() => {
    if (!id) {
      return setErrorRequest('Tarefa não encontrada.')
    }
    const task = tasksList.find(task => {
      return task.id === id
    })

    if (!task) {
      return setErrorRequest('Tarefa não encontrada.')
    }

    setFormData({
      id: task.id,
      title: task.title,
      description: task.description,
    })
  }, [id, tasksList])

  const isScreenMd = width < 1024

  function handleInputChange(event: ChangeEvent<
    HTMLInputElement |
    HTMLTextAreaElement
  >,
  ) {
    const { name, value } = event.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  async function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    const { isValid, errors } = validateForms({
      schema: editTaskFormSchema,
      data: formData,
    })
    if (!isValid) {
      return setErrorsValidation(errors as Partial<EditTaskFormSchema>)
    } else {
      setErrorsValidation({})
    }

    try {
      await updateTask(formData as EditTaskDTO)
      navigate('/')
    } catch (error) {
      console.log('🚀 ~ handleSubmit ~ error:', error)
      setErrorRequest('Ocorreu um erro ao tentar editar a tarefa.')
    }
  }

  function handleNavigateManagerTask() {
    navigate('/')
  }

  useEffect(() => {
    if (isEmptyTaskList) {
      getTask()
    }
  }, [getTask, tasksList, isEmptyTaskList])

  return (

    <div className="w-full flex flex-col items-center  py-10 px-6 gap-8
        lg:bg-white sm:w-9/12 lg:rounded-lg lg:min-h-[80%]
        "
    >

      <HeadingTitle title="Editar Tarefa" size="small" />
      <form className="w-full flex flex-col gap-6">
        <Input
          id="title"
          title="Titulo:"
          placeholder="Digite o titulo da tarefa"
          value={formData.title}
          onChange={handleInputChange}
          error={errorsValidation.title}
        />
        <TextArea
          id="description"
          title="Descrição:"
          placeholder="Digite a descrição da tarefa"
          value={formData.description}
          onChange={handleInputChange}
          error={errorsValidation.description}
        />

        {errorsRequest && (
          <p className="text-danger text-md text-center">{errorsRequest}</p>
        )}

        <div className="w-full flex justify-end gap-6">
          <Button.Root
            variant="danger"
            onClick={handleNavigateManagerTask}
          >
            <Button.Title title="Cancelar" />
          </Button.Root>
          <Button.Root
            variant="info"
            onClick={handleSubmit}
          >
            <Button.Title
              title="Editar"
            />
            {!isScreenMd && <Pencil fontSize={30} className="text-white" />}
          </Button.Root>

        </div>
      </form>

    </div>
  )
}
