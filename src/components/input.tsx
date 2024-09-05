import {
  forwardRef,
  InputHTMLAttributes,
  LegacyRef,
} from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string

}

export const Input = forwardRef(({
  title,
  id,
  ...rest
}: InputProps,
ref: LegacyRef<HTMLInputElement>) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-2xl text-gray-700"
      >
        {title}
      </label>
      <input
        ref={ref}
        id={id}
        className="p-3 rounded-lg bg-gray-300 text-gray-600
          placeholder:text-md  placeholder:text-gray-700
          focus:outline-none focus:ring-gray-600 focus:ring-2"
        {...rest}
      />

    </div>
  )
})
