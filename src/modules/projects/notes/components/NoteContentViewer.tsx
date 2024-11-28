import type { FC } from 'react'
import type { NoteNode } from '@types'
import { MarkdownViewer } from '@components'

interface Props {
  note: NoteNode
}

const NoteContentViewer: FC<Props> = ({ note }) => {
  return (
      <>
        <MarkdownViewer markdownContent={note.content}/>
      </>
  )
}

export default NoteContentViewer