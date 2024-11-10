import { MainCard } from '@components'
import NoteList from '@projects/notes/components/NoteList'

const ProjectPage = () => {
  return (
      <div className="px-4">
        <MainCard>
          <h3 className="mb-8">
            Mis notas
          </h3>
          <NoteList/>
        </MainCard>
      </div>
  )
}

export default ProjectPage