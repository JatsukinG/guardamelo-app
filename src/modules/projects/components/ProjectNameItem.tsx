import type { FC } from 'react'
import type { ProjectNode } from '@types'
import { MdFolder } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

interface Props {
  project: ProjectNode
}

const ProjectNameItem: FC<Props> = ({ project }) => {
  const navigate = useNavigate()

  return (
      <li className="py-2">
        <button
            className="link flex items-center font-semibold gap-2"
            onClick={() => navigate(`/projects/${project?.id}/notes`)}
        >
          <MdFolder/>
          {project?.name}
        </button>
      </li>
  )
}

export default ProjectNameItem