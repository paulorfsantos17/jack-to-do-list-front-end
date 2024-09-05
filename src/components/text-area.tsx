import {
  forwardRef,
  Ref,
  TextareaHTMLAttributes,
} from 'react'

type InputProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  title: string
  id: string
}

export const TextArea = forwardRef(({
  title,
  id,
  ...rest
}: InputProps,
ref: Ref<HTMLTextAreaElement>) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-2xl text-gray-700"
      >
        {title}
      </label>
      <textarea
        ref={ref}
        id={id}
        className="p-3 h-48 rounded-lg bg-gray-300 text-gray-600
          placeholder:text-md  placeholder:text-gray-700
          focus:outline-none focus:ring-gray-600 focus:ring-2
          resize-none"
        {...rest}
      />

    </div>
  )
})
