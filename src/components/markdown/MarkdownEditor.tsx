import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'
import { type FC, useRef } from 'react'
import './styles.css'

interface Props {
  onChange?: (content: string) => void
}

const MarkdownEditor: FC<Props> = ({ onChange }) => {
  const editorRef = useRef<any>(null)

  const handleChange = () => {
    if (editorRef.current) {
      const instance = editorRef.current.getInstance()
      const markdown = instance.getMarkdown()
      onChange?.(markdown)
    }
  }

  return (
      <Editor
          ref={editorRef}
          initialValue=""
          height="600px"
          initialEditType="wysiwyg"
          frontMatter={true}
          useCommandShortcut={true}
          events={{
            change: handleChange,
          }}
      />
  )
}

export default MarkdownEditor