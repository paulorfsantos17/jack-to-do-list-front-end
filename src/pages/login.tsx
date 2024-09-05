import { AxiosError } from 'axios'
import { ChangeEvent, MouseEvent, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '../components/button'
import { Heading } from '../components/heading'
import { Input } from '../components/input'
import { authenticateUser } from '../http/auth'
import { validateForms } from '../utils/validation'

const loginFormSchema = z.object({
  email: z.string().email('E-mail Inválido'),
  password: z.string()
    .min(8, 'Senha precisa conter no mínimo 3 caracteres')
    .max(50, 'Senha precisa conter no máximo 50 caracteres'),
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

export function Login() {
  const [, setCookie] = useCookies()
  const navigate = useNavigate()
  const [formData, setFormData] = useState<LoginFormSchema>({
    email: '',
    password: '',
  })

  const [errorsValidation, setErrorsValidation] =
  useState<Partial<LoginFormSchema >>({})

  const [errorsRequest, setErrorRequest] =
  useState<string>('')

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function setAuthInCookies(accessToken: string) {
    setCookie('accessToken',
      accessToken, {
        path: '/',
        maxAge: 3600,
        secure: true,
      })
  }

  async function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    const { isValid, errors } = validateForms({
      schema: loginFormSchema,
      data: formData,
    })
    if (!isValid) {
      return setErrorsValidation(errors as Partial<LoginFormSchema>)
    } else {
      setErrorsValidation({})
    }

    try {
      const data = await authenticateUser(formData)
      setAuthInCookies(data.access_token)
      navigate('/')
    } catch (error) {
      if (error instanceof AxiosError && error.status === 401) {
        return setErrorRequest('Email ou Senha está errado.')
      }
      setErrorRequest('Ocorreu um erro ao tentar fazer o login.')
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
          title="Login"
          subTitle="Organize suas tarefas e alcance
          seus objetivos com facilidade."
        />
      </div>

      <div className="lg:bg-white  lg:w-6/12 lg:px-14 lg:pt-8">
        <form className="w-full flex flex-col gap-14 mt-20">
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
              <Button.Title title="Entrar" />
            </Button.Root>
          </div>
        </form>

        <p
          className="text-gray-700 text-center leading-tight mt-24"
        >
          Não tem uma conta?
          <Link
            to="/auth/register"
            className="text-info hover:underline"
          >
          &nbsp;Crie a sua agora
          </Link>
          &nbsp;e comece a organizar suas tarefas de forma eficiente.
          Cadastre-se
        </p>
      </div>

    </div>

  )
}
