import type { FC } from 'react'
import type { FieldProps } from 'formik'
import { Editor } from '@components'

interface NoteEditorProps extends FieldProps {
  label?: string;
}

const NoteEditorField: FC<NoteEditorProps> = ({ field, form, label }) => {
  const handleEditorChange = async (content: string) => {
    await form.setFieldValue(field.name, content)
  }

  return (
      <div className="w-full mt-6">
        {label && <h4 className="font-bold mb-4">{label}</h4>}
        <Editor onChange={handleEditorChange}/>
      </div>
  )
}

export default NoteEditorField
