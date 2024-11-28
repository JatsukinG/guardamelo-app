import type { NoteNode } from '@types'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import { useFragment } from '@gql'
import { MainCard } from '@components'
import NoteQuery from '@projects/notes/queries/NoteQuery'
import NoteFragment from '@projects/notes/fragments/NoteFragment'
import NoteContentViewer from '@projects/notes/components/NoteContentViewer'


const NotePage = () => {
  const { noteId } = useParams()

  //TODO make a component to indicate if note id not found
  if (!noteId) return null

  const { data } = useQuery(NoteQuery, {
    variables: {
      id: noteId as string,
    },
  })
  const note = useFragment(NoteFragment, data?.note)

  return (
      <div className="px-4">
        <MainCard>
          <h3 className="mb-8">
            Note page
          </h3>
          {
              !!note && (
                  <NoteContentViewer note={note as NoteNode}/>
              )
          }
        </MainCard>
      </div>
  )
}

export default NotePage