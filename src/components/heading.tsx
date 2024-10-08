interface HeadingProps {
  title: string
  subTitle: string
}

export function Heading({ title, subTitle }: HeadingProps) {
  return (
    <div className="flex flex-col items-center gap-14">
      <h1 className="font-bold text-4xl text-gray-700
        lg:text-white lg:text-7xl"
      >{title}
      </h1>
      <p className="text-gray-700 text-center text-md w-4/6
      lg:text-white lg:text-2xl lg:w-full lg:leading-snug"
      >
        {subTitle}
      </p>
    </div>
  )
}
