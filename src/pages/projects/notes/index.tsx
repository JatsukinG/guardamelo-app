import { MainCard } from '@components'
import NoteList from '@projects/notes/components/NoteList'
import { Button } from 'flowbite-react'
import { IoMdAddCircle } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router-dom'

const NotesPage = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
      <div className="px-4">
        <MainCard>
          <div className="mb-8 w-full flex items-center justify-between">
            <h2>
              Mis notas
            </h2>
            <Button
                color="purple"
                size="sm"
                onClick={() => navigate(`${location.pathname}/create`)}
            >
              <IoMdAddCircle size={18} className="me-2"/>
              Agregar nota
            </Button>
          </div>
          <NoteList/>
        </MainCard>
      </div>
  )
}

export default NotesPage