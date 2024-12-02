import type { FC } from 'react'
import { useQuery } from '@apollo/client'
import { IoDocumentText } from 'react-icons/io5'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFragment } from '@gql'
import NotesQuery from '@projects/notes/queries/NotesQuery'
import NoteFragment from '@projects/notes/fragments/NoteFragment'

interface Props {
  projectId: string
}


const NoteList: FC<Props> = ({ projectId }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const { data, loading, error } = useQuery(NotesQuery, {
    variables: {
      projectId: projectId,
    },
    // TODO check if this is the correct way
    fetchPolicy: 'network-only',
  })
  const notes = data?.notes?.edges.map(noteEdge => useFragment(NoteFragment, noteEdge?.node)) ?? []

  if (error) return <p>Create an error component...</p>

  return (
      <div>
        <ul className="list-none divide-y">
          {
            notes.map(note => (
                <li key={note?.id} className="py-2">
                  <button
                      className="link flex items-center gap-2"
                      onClick={() => navigate(`${location.pathname}/${note?.id}`)}
                  >
                    <IoDocumentText/>
                    {note?.title}
                  </button>
                </li>
            ))
          }
        </ul>
        {loading && <p>Cargando...</p>}
      </div>
  )
}

export default NoteList