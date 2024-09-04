import { Link } from 'react-router-dom'

import { Button } from '../components/button'
import { Heading } from '../components/heading'
import { Input } from '../components/input'

export function Register() {
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
          />
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
            className="text-gray-400 hover:underline"
          >
          &nbsp;Faça login aqui
          </Link>
          &nbsp;e acesse suas tarefas.
        </p>
      </div>

    </div>

  )
}
