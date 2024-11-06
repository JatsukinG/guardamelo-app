import { Button } from 'flowbite-react'
import NiceModal from '@ebay/nice-modal-react'
import { IoMdAddCircle } from 'react-icons/io'
import MainCard from '@/components/cards/MainCard'
import ProjectsList from '@/modules/projects/components/ProjectsList'
import CreateProjectModal from '@projects/components/CreateProjectModal'

const ProjectsPage = () => {
  return (
      <div className="px-4">
        <MainCard>
          <div className="w-full flex items-center justify-between">
            <h2 className="mb-12">
              Mis proyectos
            </h2>
            <Button
                color="purple"
                size="sm"
                onClick={() => NiceModal.show(CreateProjectModal)}
            >
              <IoMdAddCircle size={18} className="me-2"/>
              Agregar proyecto
            </Button>
          </div>
          <ProjectsList/>
        </MainCard>
      </div>
  )
}

export default ProjectsPage