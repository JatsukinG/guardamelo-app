import type { FC } from 'react'
import type { Editor } from '@tiptap/react'
import clsx from 'clsx'
import { BsTypeH2 } from 'react-icons/bs'
import { PiCodeBlockBold } from 'react-icons/pi'
import { FaBold, FaCode, FaItalic, FaListOl, FaListUl } from 'react-icons/fa'

interface Props {
  editor: Editor
}

const EditorToolbar: FC<Props> = ({ editor }) => {
  if (!editor) return null

  const buttonClass = (isActive: boolean) =>
      clsx(
          'px-2 py-1 rounded transition-colors duration-200',
          isActive ? 'bg-purple-800 text-white' : 'bg-white text-gray-800 hover:bg-purple-200',
      )

  return (
      <div className="flex flex-wrap space-x-2 mb-4 bg-purple-100 p-2 rounded">
        <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={buttonClass(editor.isActive('bold'))}
        >
          <FaBold/>
        </button>
        <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={buttonClass(editor.isActive('italic'))}
        >
          <FaItalic/>
        </button>
        <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={buttonClass(editor.isActive('heading', { level: 2 }))}
        >
          <BsTypeH2/>
        </button>
        <button
            type="button"
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={buttonClass(editor.isActive('underline'))}
        >
          <FaCode/>
        </button>
        <button
            type="button"
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={buttonClass(editor.isActive('codeBlock'))}
        >
          <PiCodeBlockBold/>
        </button>
        <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={buttonClass(editor.isActive('bulletList'))}
        >
          <FaListUl/>
        </button>
        <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={buttonClass(editor.isActive('orderedList'))}
        >
          <FaListOl/>
        </button>
      </div>
  )
}

export default EditorToolbar