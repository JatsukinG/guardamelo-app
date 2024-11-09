import { Button } from 'flowbite-react'
import { useSetRecoilState } from 'recoil'
import { IoMdAddCircle } from 'react-icons/io'
import { MainCard } from '@components'
import ProjectList from '@projects/components/ProjectList'
import showAddProjectStatus from '@projects/atoms/showAddProjectStatus'

const ProjectsPage = () => {
  const setShowAddProject = useSetRecoilState(showAddProjectStatus)

  return (
      <div className="px-4">
        <MainCard>
          <div className="mb-8 w-full flex items-center justify-between">
            <h2>
              Mis proyectos
            </h2>
            <Button
                color="purple"
                size="sm"
                onClick={() => setShowAddProject(true)}
            >
              <IoMdAddCircle size={18} className="me-2"/>
              Agregar proyecto
            </Button>
          </div>
          <ProjectList/>
        </MainCard>
      </div>
  )
}

export default ProjectsPage