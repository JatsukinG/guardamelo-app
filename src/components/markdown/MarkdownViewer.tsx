import type { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Props {
  markdownContent: string;
}

const MarkdownViewer: FC<Props> = ({ markdownContent }) => (
    <article className="prose lg:prose-xl max-w-none">
      <ReactMarkdown
          children={markdownContent}
          components={{
            code({ className, children, ...rest }) {
              const match = /language-(\w+)/.exec(className || '')
              if (match) {
                return (
                    <SyntaxHighlighter
                        language={match[1]}
                        PreTag="div"
                        style={vscDarkPlus}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                )
              }
              return <code className={className} {...rest}>{children}</code>
            },
          }}
      />
    </article>
)

export default MarkdownViewer
