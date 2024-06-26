import clsx from 'clsx'

export default function CircleButton(props) {
  const { className, ...rest } = props

  return (
    <button
      className={clsx([
        'flex aspect-square w-[2rem] md:w-[2.875rem] items-center justify-center rounded-full bg-white text-sm font-bold duration-200 hover:bg-opacity-70',
        className,
      ])}
      type="button"
      {...rest}
    />
  )
}
