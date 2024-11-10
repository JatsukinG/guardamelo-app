import type { FC } from 'react'
import clsx from 'clsx'
import StarterKit from '@tiptap/starter-kit'
import CodeBlock from '@tiptap/extension-code-block'
import { EditorContent, useEditor } from '@tiptap/react'
import EditorToolbar from '@/components/editor/EditorToolbar'

interface Props {
  onChange?: (content: string) => void
}

const Editor: FC<Props> = ({ onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlock.configure({
        HTMLAttributes: {
          class: 'bg-gray-100 text-gray-800 rounded p-4 font-mono',
        },
      }),
    ],
    autofocus: 'end',
    onUpdate: ({ editor }) => {
      const content = editor.getHTML()
      onChange?.(content)
    },
  })

  if (!editor) {
    return null
  }

  return (
      <div>
        <EditorToolbar editor={editor}/>
        <EditorContent
            editor={editor}
            className={clsx([
              'prose lg:prose-xl bg-white p-2 min-h-96 h-max flex rounded',
              '[&>div]:flex-grow [&>div]:outline-none',
            ])}
        />
      </div>
  )
}

export default Editor