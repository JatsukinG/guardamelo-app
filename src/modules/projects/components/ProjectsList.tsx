interface Project {
  id: string
  name: string
}

const projects: Project[] = [
  {
    id: 'grupon1',
    name: 'Grupo N1',
  }, {
    id: 'grupon1',
    name: 'Grupo N1',
  },
]

const ProjectsList = () => {
  return (
      <div>
        <ul className="list-none">
          {
            projects.map(project => (
                <li key={project.id}>
                  <p>
                    {project.name}
                  </p>
                </li>
            ))
          }
        </ul>
      </div>
  )
}

export default ProjectsList