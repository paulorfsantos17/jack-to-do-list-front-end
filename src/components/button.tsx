import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonRootProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  typeStyle: 'success' | 'danger' | 'info' | 'outline'
}

interface ButtonTitleProps {
  title: string
}

function Root({ children, typeStyle, ...rest }: ButtonRootProps) {
  function onDefineBackgroundButton() {
    switch (typeStyle) {
      case 'success':
        return 'bg-success'
      case 'danger':
        return 'bg-danger'
      case 'info':
        return 'bg-info'
      case 'outline':
        return 'bg-transparent'
    }
  }

  return (
    <button
      className={`flex gap-4 items-center justify-center w-52 h-14 rounded-lg
        ${onDefineBackgroundButton()}`}
      {...rest}
    >
      {children}
    </button>
  )
}
function Title({ title }: ButtonTitleProps) {
  return (
    <span className="text-white text-xl font-bold">
      {title}
    </span>
  )
}

export const Button = { Root, Title }
