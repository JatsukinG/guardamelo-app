import type { FC } from 'react'
import { useState } from 'react'
import clsx from 'clsx'
import { TbCopy, TbCopyCheck } from 'react-icons/tb'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface Props {
  value: string
  className?: string
}

const SyntaxCard: FC<Props> = ({ className, value }) => {
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
            'bg-gray-600 rounded-lg overflow-hidden',
            className,
          ])}
      >
        <header className="w-full flex items-center justify-between">
          <div className="bg-gray-700 border-b-2 rounded-tr-lg border-purple-600 px-4 py-2">
            <span className="text-white text-xs">
              Terminal
            </span>
          </div>
          <div className="px-4 py-2 flex items-center gap-2">
            <button
                className={clsx([
                  'font-medium flex items-center gap-2',
                  isCopied ? 'text-purple-400' : 'text-white',
                ])}
                onClick={() => copyToClipboard()}
            >
              {
                isCopied
                    ?
                    <>
                      <span className="text-xs">
                        ¡Copiado!
                      </span>
                      <TbCopyCheck/>
                    </>
                    :
                    <TbCopy/>
              }
            </button>
          </div>
        </header>
        <SyntaxHighlighter
            language="bash"
            style={monokai}
        >
          {value}
        </SyntaxHighlighter>
      </div>
  )
}

export default SyntaxCard