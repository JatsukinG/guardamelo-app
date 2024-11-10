import { MainCard } from '@components'
import CreateNoteForm from '@projects/notes/components/CreateNoteForm'

const CreateNotePage = () => {
  return (
      <div className="px-4">
        <MainCard>
          <h3 className="mb-8">
            Crear nueva nota
          </h3>
          <CreateNoteForm/>
        </MainCard>
      </div>
  )
}

export default CreateNotePage