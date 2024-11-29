import type { FC } from 'react'
import clsx from 'clsx'
import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/react'

interface Props {
  content: string
}


const EditorViewer: FC<Props> = ({ content }) => {
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
            class: 'text-sm bg-gray-200 text-gray-800 rounded px-1 font-mono',
          },
        },
        codeBlock: {
          HTMLAttributes: {
            class: 'text-sm bg-gray-200 text-gray-800 rounded p-4 font-mono',
          },
        },
      }),
    ],
    content: content,
    editable: false,
  })

  if (!editor) {
    return null
  }

  return (
      <EditorContent
          editor={editor}
          className={clsx([
            'flex-grow prose lg:prose-xl h-full flex flex-col rounded',
            '[&>div]:flex-grow [&>div]:outline-none',
          ])}
      />
  )
}

export default EditorViewer