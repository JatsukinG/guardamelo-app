import type { FC } from 'react'
import { useState } from 'react'
import clsx from 'clsx'
import { TbCopy, TbCopyCheck } from 'react-icons/tb'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

interface Props {
  value: string
  className?: string
}

const CommandCard: FC<Props> = ({ className, value }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setIsCopied(true)

      setTimeout(() => setIsCopied(false), 5000)
    } catch (err) {
      console.error('Error al copiar el texto:', err)
    }
  }

  return (
      <div
          className={clsx([
            'flex items-center bg-gray-100 rounded-lg overflow-hidden',
            className,
          ])}
      >
        <div className="flex-grow text-sm overflow-x-auto">
          <SyntaxHighlighter
              language="javascript"
              style={atomOneLight}
              customStyle={{background: '#f3f4f6'}}
          >
            {value}
          </SyntaxHighlighter>
        </div>

        <div className="px-2">
          <button
              onClick={() => copyToClipboard()}
              className="text-purple-800 font-medium flex items-center gap-2"
          >
            {
              isCopied ? <TbCopyCheck/> : <TbCopy/>
            }
          </button>
        </div>
      </div>
  )
}

export default CommandCard