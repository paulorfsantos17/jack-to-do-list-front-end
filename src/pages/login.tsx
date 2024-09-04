import { Button } from '../components/button'
import { Heading } from '../components/heading'
import { Input } from '../components/input'

export function Login() {
  return (
    <div className="flex flex-col  px-8 py-20 ">
      <Heading
        title="Login"
        subTitle="Organize suas tarefas e alcance
          seus objetivos com facilidade."
      />

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
        className="text-gray-700 text-center leading-tight mt-44"
      >
        Não tem uma conta?
        <a
          href="#"
          className="text-gray-400"
        >
          &nbsp;Crie a sua agora
        </a>
        &nbsp; e comece a organizar suas tarefas de forma eficiente.
        Cadastre-se
      </p>

    </div>

  )
}
