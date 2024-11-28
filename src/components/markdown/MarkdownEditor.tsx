import { type FC, useState } from 'react'
import MDEditor from '@uiw/react-md-editor'

interface Props {
  onChange?: (content: string) => void
}


const MarkdownEditor: FC<Props> = ({ onChange }) => {
  const [content, setContent] = useState<string>('')

  const handleEditorChange = (value: string | undefined) => {
    setContent(value ?? '')
    value && onChange?.(value)
  }

  return (
      <MDEditor
          value={content}
          onChange={handleEditorChange}
          height={400}
          preview="edit"
          draggable={false}
      />
  )
}

export default MarkdownEditor
