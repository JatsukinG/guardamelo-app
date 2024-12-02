import type { FC } from 'react'
import type { Editor } from '@tiptap/react'
import clsx from 'clsx'
import { Popover } from 'flowbite-react'
import { BsTypeH2 } from 'react-icons/bs'
import { PiCodeBlockBold } from 'react-icons/pi'
import EditorUrlForm from '@/components/editor/EditorUrlForm'
import { FaBold, FaCode, FaItalic, FaLink, FaListOl, FaListUl } from 'react-icons/fa'

interface Props {
  editor: Editor
}

const buttonClass = (isActive: boolean) =>
    clsx(
        'px-2 py-1 rounded transition-colors duration-200',
        isActive ? 'bg-purple-800 text-white' : 'bg-white text-gray-800 hover:bg-purple-200',
    )


const EditorToolbar: FC<Props> = ({ editor }) => {
  if (!editor) return null


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
        <Popover
            trigger="click"
            content={(
                <div className="w-full p-4">
                  <EditorUrlForm onSubmit={(url) => editor.chain().focus().toggleLink({ href: url }).run()}/>
                </div>
            )}
        >
          <button
              type="button"
              className={buttonClass(editor.isActive('link'))}
          >
            <FaLink/>
          </button>
        </Popover>
      </div>
  )
}

export default EditorToolbar