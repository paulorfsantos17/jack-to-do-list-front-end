import { Link } from 'react-router-dom'

import { Button } from '../components/button'
import { Heading } from '../components/heading'
import { Input } from '../components/input'

export function Login() {
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
          />
          <Input
            title="Senha:"
            id="password"
            placeholder="Digite sua senha"
          />

          <div className="w-full flex justify-center">
            <Button.Root typeStyle="info">
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
