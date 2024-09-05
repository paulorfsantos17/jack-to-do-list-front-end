import { AxiosError } from 'axios'
import { ChangeEvent, MouseEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '../components/button'
import { Heading } from '../components/heading'
import { Input } from '../components/input'
import { registerUser } from '../http/register'
import { validateForms } from '../utils/validation'

const registerFormSchema = z.object({
  name: z.string()
    .min(3, 'Nome precisa conter no mínimo 3 caracteres')
    .max(100, 'Nome precisa conter no máximo 100 caracteres'),
  email: z.string().email('E-mail Inválido'),
  password: z.string()
    .min(8, 'Senha precisa conter no mínimo 3 caracteres')
    .max(50, 'Senha precisa conter no máximo 50 caracteres'),
})

type RegisterFormSchema = z.infer<typeof registerFormSchema>

export function Register() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState<RegisterFormSchema>({
    name: '',
    email: '',
    password: '',
  })

  const [errorsValidation, setErrorsValidation] =
    useState<Partial<RegisterFormSchema >>({})

  const [errorsRequest, setErrorRequest] =
    useState<string>('')

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  async function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    const { isValid, errors } = validateForms({
      schema: registerFormSchema,
      data: formData,
    })
    if (!isValid) {
      return setErrorsValidation(errors as Partial<RegisterFormSchema>)
    } else {
      setErrorsValidation({})
    }

    try {
      await registerUser(formData)
      navigate('/auth')
    } catch (error) {
      if (error instanceof AxiosError && error.status === 409) {
        return setErrorRequest('E-mail já esta em uso.')
      }
      setErrorRequest('Ocorreu um erro ao registrar a conta.')
    }
  }

  return (
    <div className="flex flex-col  px-8 py-20
      lg:flex-row lg:bg-gray-400 lg:px-0 lg:py-0 lg:justify-end"
    >
      <div className="lg:w-full lg:flex lg:h-screen
        lg:justify-center lg:items-center"
      >
        <Heading
          title="Criar Conta"
          subTitle="Junte-se a nós e simplifique seu dia a dia.
            Crie sua conta e comece a organizar suas tarefas de
            forma inteligente e prática."
        />
      </div>

      <div className="lg:bg-white  lg:w-6/12 lg:px-14 lg:pt-8">
        <form className="w-full flex flex-col gap-7 mt-20">
          <Input
            title="Nome"
            id="name"
            placeholder="Digite seu nome"
            error={errorsValidation.name}
            onChange={handleInputChange}
          />
          <Input
            title="E-mail:"
            id="email"
            placeholder="Digite seu e-mail"
            error={errorsValidation.email}
            onChange={handleInputChange}
          />
          <Input
            title="Senha:"
            id="password"
            type="password"
            placeholder="Digite sua senha"
            error={errorsValidation.password}
            onChange={handleInputChange}
          />
          {errorsRequest && (
            <p className="text-danger text-md text-center">{errorsRequest}</p>
          )}

          <div className="w-full flex justify-center">
            <Button.Root
              variant="info"
              onClick={handleSubmit}
            >
              <Button.Title title="Cadastrar" />
            </Button.Root>
          </div>

        </form>

        <p
          className="text-gray-700 text-center leading-tight mt-24"
        >
          Já tem uma conta?
          <Link
            to="/auth"
            className="text-info hover:underline"
          >
          &nbsp;Faça login aqui
          </Link>
          &nbsp;e acesse suas tarefas.
        </p>
      </div>

    </div>

  )
}
