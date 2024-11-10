import type { FC } from 'react'
import StarterKit from '@tiptap/starter-kit'
import CodeBlock from '@tiptap/extension-code-block'
import { EditorContent, useEditor } from '@tiptap/react'
import EditorToolbar from '@/components/editor/EditorToolbar'
import clsx from 'clsx'

interface Props {
  onSave?: (content: string) => void
}

const Editor: FC<Props> = ({ onSave }) => {
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
  })

  const handleSave = () => {
    if (editor) {
      const content = editor.getHTML()
      onSave?.(content)
    }
  }

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
        <button
            onClick={handleSave}
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          Guardar Nota
        </button>
      </div>
  )
}

export default Editor