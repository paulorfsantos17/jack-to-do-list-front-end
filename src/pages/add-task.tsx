import { Plus, X } from '@phosphor-icons/react'
import { AxiosError } from 'axios'
import { type ChangeEvent, type MouseEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '../components/button'
import { HeadingTitle } from '../components/heading-title'
import { Input } from '../components/input'
import { TextArea } from '../components/text-area'
import { useTasksContext } from '../hooks/useTasksContext'
import useWindowSize from '../hooks/useWindowSize'
import { validateForms } from '../utils/validation'

const addTaskFormSchema = z.object({
  title: z.string().min(5, 'Título tem que ter no mínimo 5 caracteres.'),
  description: z.string()
    .min(3, 'Description precisa conter no mínimo 3 caracteres')
    .max(100, 'Description precisa conter no máximo 100 caracteres'),
})

type AddTaskFormSchema = z.infer<typeof addTaskFormSchema>

export function AddTask() {
  const { addTask } = useTasksContext()

  const [formData, setFormData] = useState<AddTaskFormSchema>({
    title: '',
    description: '',
  })

  const [errorsValidation, setErrorsValidation] =
  useState<Partial<AddTaskFormSchema >>({})

  const [errorsRequest, setErrorRequest] =
  useState<string>('')

  const navigate = useNavigate()
  const { width } = useWindowSize()

  const isScreenMd = width < 1024

  function handleNavigateManagerTask() {
    navigate('/')
  }

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
      schema: addTaskFormSchema,
      data: formData,
    })
    if (!isValid) {
      return setErrorsValidation(errors as Partial<AddTaskFormSchema>)
    } else {
      setErrorsValidation({})
    }

    try {
      await addTask(formData)
      navigate('/')
    } catch (error) {
      if (error instanceof AxiosError && error.status === 401) {
        return setErrorRequest('Email ou Senha está errado.')
      }
      setErrorRequest('Ocorreu um erro ao tentar fazer o login.')
    }
  }

  return (
    <div className="lg:bg-gray-400 h-screen
    flex justify-center lg:items-center "
    >
      <div className="w-full  flex flex-col items-center
          py-10 px-6 gap-8
        lg:bg-white sm:w-9/12 lg:rounded-lg lg:min-h-[80%]
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
        <form className="w-full h-full flex flex-col gap-6">
          <Input
            id="title"
            title="Titulo:"
            placeholder="Digite o titulo da tarefa"
            onChange={handleInputChange}
            error={errorsValidation.title}
          />
          <TextArea
            id="description"
            title="Descrição:"
            placeholder="Digite a descrição da tarefa"
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
              variant="success"
              onClick={handleSubmit}
              type="submit"
            >
              <Button.Title title="Adicionar" />
              {!isScreenMd && <Plus fontSize={30} className="text-white" />}
            </Button.Root>

          </div>
        </form>

      </div>
    </div>
  )
}
