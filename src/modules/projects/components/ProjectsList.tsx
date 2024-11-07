import { MdFolder } from 'react-icons/md'
import { useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { useFragment } from '@gql'
import ProjectsQuery from '@projects/queries/ProjectsQuery'
import ProjectFragment from '@projects/fragments/ProjectFragment'


const ProjectsList = () => {
  const navigate = useNavigate()
  const { data, loading } = useQuery(ProjectsQuery)
  const projects = data?.projects?.edges.map(project => useFragment(ProjectFragment, project?.node)) ?? []

  return (
      <div>
        <ul className="list-none divide-y">
          {
            projects.map(project => (
                <li key={project?.id} className="py-2">
                  <button
                      className="link flex items-center gap-2"
                      onClick={() => navigate(`/projects/${project?.id}`)}
                  >
                    <MdFolder/>
                    {project?.name}
                  </button>
                </li>
            ))
          }
        </ul>
        {loading && <p>Cargando...</p>}
      </div>
  )
}

export default ProjectsList