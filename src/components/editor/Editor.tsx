import type { FC } from 'react'
import clsx from 'clsx'
import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/react'
import EditorToolbar from '@/components/editor/EditorToolbar'

interface Props {
  onChange?: (content: string) => void
}

const Editor: FC<Props> = ({ onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc pl-8 text-gray-800',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal pl-8 text-gray-800',
          },
        },
        listItem: {
          HTMLAttributes: {
            class: 'pl-1',
          },
        },
        code: {
          HTMLAttributes: {
            class: 'text-sm bg-gray-100 text-gray-800 rounded px-1 font-mono',
          },
        },
        codeBlock: {
          HTMLAttributes: {
            class: 'text-sm bg-gray-100 text-gray-800 rounded p-4 font-mono',
          },
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
        <div className="bg-white p-4 min-h-96 max-h-96 flex flex-col overflow-auto">
          <EditorContent
              editor={editor}
              className={clsx([
                'flex-grow prose lg:prose-xl h-full flex flex-col rounded',
                '[&>div]:flex-grow [&>div]:outline-none',
              ])}
          />
        </div>
      </div>
  )
}

export default Editor