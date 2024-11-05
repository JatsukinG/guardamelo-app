import { MdFolder } from 'react-icons/md'
import { useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import ProjectsQuery from '@projects/queries/ProjectsQuery'


const ProjectsList = () => {
  const navigate = useNavigate()
  const { data, loading } = useQuery(ProjectsQuery)

  return (
      <div>
        <ul className="list-none divide-y">
          {
            data?.projects?.edges.map(project => (
                <li key={project?.node?.id} className="py-2">
                  <button
                      className="link flex items-center gap-2"
                      onClick={() => navigate(`/projects/${project?.node?.id}`)}
                  >
                    <MdFolder/>
                    {project?.node?.name}
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