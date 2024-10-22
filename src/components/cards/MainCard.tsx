import type { FC, HTMLAttributes, PropsWithChildren } from 'react'
import clsx from 'clsx'

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

const MainCard: FC<PropsWithChildren<Props>> = ({ className, children, ...rest }) => {
  return (
      <div
          {...rest}
          className={clsx([
            'bg-white/60 rounded-lg shadow-md p-4 md:p-8',
            className,
          ])}
      >
        {children}
      </div>
  )
}

export default MainCard