import React from 'react'
import { Editor } from '@components'

interface NoteEditorProps {
  onSave?: (content: string) => void;
}

const NoteEditor: React.FC<NoteEditorProps> = ({ onSave }) => {

  return (
      <div className="w-full mt-6">
        <h4 className="font-bold mb-4">
          Contenido
        </h4>
        <Editor onSave={onSave}/>
      </div>
  )
}

export default NoteEditor