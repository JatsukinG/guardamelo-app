import type { ProjectNode } from '@types'
import { useFragment } from '@gql'
import { useRecoilValue } from 'recoil'
import { useQuery } from '@apollo/client'
import ProjectsQuery from '@projects/queries/ProjectsQuery'
import ProjectFragment from '@projects/fragments/ProjectFragment'
import ProjectNameItem from '@projects/components/ProjectNameItem'
import CreateProjectItem from '@projects/components/CreateProjectItem'
import showAddProjectStatus from '@projects/atoms/showAddProjectStatus'


const ProjectList = () => {
  const { data, loading } = useQuery(ProjectsQuery)
  const projects = data?.projects?.edges.map(project => useFragment(ProjectFragment, project?.node)) ?? []

  const showAddProject = useRecoilValue(showAddProjectStatus)

  return (
      <div>
        <ul className="list-none divide-y">
          {showAddProject && <CreateProjectItem/>}
          {
            projects.map(project => (
                <ProjectNameItem key={project?.id} project={project as ProjectNode}/>
            ))
          }
        </ul>
        {loading && <p>Cargando...</p>}
      </div>
  )
}

export default ProjectList