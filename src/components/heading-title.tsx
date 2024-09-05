interface HeadingTitleProps {
  title: string
  size?: 'small' | 'regular'
}
export default function HeadingTitle({
  title,
  size = 'regular',
} : HeadingTitleProps) {
  const fontSize : Record<string, string> = {
    small: 'text-2xl',
    regular: 'text-[32px]',
  }

  return (
    <h1 className={`text-gray-700 font-bold ${fontSize[size]}`}>
      {title}
    </h1>
  )
}
