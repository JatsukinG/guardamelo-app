import { useQuery } from '@apollo/client'
import { MdFolder } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFragment } from '@gql'
import NotesQuery from '@projects/notes/queries/NotesQuery'
import NoteFragment from '@projects/notes/fragments/NoteFragment'

const NoteList = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { data, loading } = useQuery(NotesQuery)
  const notes = data?.notes?.edges.map(noteEdge => useFragment(NoteFragment, noteEdge?.node)) ?? []

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
                    <MdFolder/>
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