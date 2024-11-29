import type { FC } from 'react'
import type { NoteNode } from '@types'
import { EditorViewer } from '@components'

interface Props {
  note: NoteNode
}

const NoteContentViewer: FC<Props> = ({ note }) => {
  return (
      <>
        <EditorViewer content={note.content}/>
      </>
  )
}

export default NoteContentViewer