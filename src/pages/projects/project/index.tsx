import { MainCard } from '@components'
import DocumentList from '@projects/documents/components/DocumentList'

const ProjectPage = () => {
  return (
      <div className="px-4">
        <MainCard>
          <h3 className="mb-8">
            Mis documentos
          </h3>
          <DocumentList/>
        </MainCard>
      </div>
  )
}

export default ProjectPage