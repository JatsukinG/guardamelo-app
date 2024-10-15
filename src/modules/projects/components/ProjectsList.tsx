import { MdFolder } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

interface Project {
  id: string
  name: string
}

const projects: Project[] = [
  {
    id: 'grupon1',
    name: 'Grupo N1',
  }, {
    id: 'premiummarketplace',
    name: 'Premium Marketplace',
  },
]

const ProjectsList = () => {
  const navigate = useNavigate()

  return (
      <div>
        <ul className="list-none divide-y">
          {
            projects.map(project => (
                <li key={project.id} className="py-2">
                  <button
                      className="link flex items-center gap-2"
                      onClick={() => navigate(`/projects/${project.id}`)}
                  >
                    <MdFolder/>
                    {project.name}
                  </button>
                </li>
            ))
          }
        </ul>
      </div>
  )
}

export default ProjectsList