import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonRootProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'success' | 'danger' | 'info' | 'outline'
  typeStyle?: 'icons' | 'default' | 'closed'

}

interface ButtonTitleProps {
  title: string
}

function Root({
  children,
  variant = 'info',
  typeStyle = 'default',
  ...rest
}: ButtonRootProps) {
  const backgroundClasses: Record<string, string> = {
    success: 'bg-success',
    danger: 'bg-danger',
    info: 'bg-info',
    outline: 'bg-transparent',
  }

  const typeButton : Record<string, string> = {
    default: 'w-52',
    icons: 'min-w-10 h-10 p-2',
    closed: 'w-12 h-12 p-2',
  }

  return (
    <button
      className={`flex gap-4 items-center justify-around  h-14 rounded-lg  
        hover:opacity-80
        ${typeButton[typeStyle]}
        ${backgroundClasses[variant]}`}
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
