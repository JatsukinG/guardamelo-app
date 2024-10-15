import ProjectsList from '@/modules/projects/components/ProjectsList'
import { Button } from 'flowbite-react'
import { IoMdAddCircle } from 'react-icons/io'

const ProjectsPage = () => {
  return (
      <div className="px-4">
        <div className="bg-white rounded-lg p-4 shadow-md md:p-8">
          <div className="w-full flex items-center justify-between">
            <h2 className="mb-12">
              Mis proyectos
            </h2>
            <Button color="purple" size="xs">
              <IoMdAddCircle size={18} className="me-2"/>
              Agregar proyecto
            </Button>
          </div>
          <ProjectsList/>
        </div>
      </div>
  )
}

export default ProjectsPage