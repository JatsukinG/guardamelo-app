import { resources } from '@resources/constants/resources'
import { useNavigate } from 'react-router-dom'

const ResourcesList = () => {
  const navigate = useNavigate()

  return (
      <div>
        <div className="flex md:flex-col gap-y-2">
          {
            resources.map(resource => (
                <div
                    key={resource.id}
                    className="group p-1 bg-white border rounded-lg flex gap-4"
                >
                  <div className="shrink-0 h-32 aspect-square overflow-hidden rounded-lg">
                    <img
                        alt=""
                        src={resource.image}
                        className="h-full w-full object-cover group-hover:scale-110 duration-300"
                    />
                  </div>
                  <div>
                    <h2
                        onClick={() => navigate(`/resources/${resource.id}`)}
                        className="w-fit py-2 line-clamp-2 group-hover:text-purple-800 hover:underline hover:cursor-pointer"
                    >
                      {resource.title}
                    </h2>
                    <p className="line-clamp-3">
                      {resource.description}
                    </p>
                  </div>
                </div>
            ))
          }
        </div>
      </div>
  )
}

export default ResourcesList