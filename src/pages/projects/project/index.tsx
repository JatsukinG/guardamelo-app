import MainCard from '@/components/cards/MainCard'
import SyntaxCard from '@/modules/projects/components/SyntaxCard'

const groups = [
  {
    id: 1,
    title: 'Next docker containers',
    commands: [
      {
        id: 1,
        title: 'Uploader',
        type: 'syntax',
        value: 'ssh -i ~/.ssh/n1.pem ubuntu@34.221.13.245',
      },
      {
        id: 2,
        title: 'Api',
        type: 'syntax',
        value: 'ssh -i ~/.ssh/n1.pem ubuntu@54.213.60.8',
      },
    ],
  },
  {
    id: 2,
    title: 'Local docker commands',
    commands: [
      {
        id: 1,
        title: 'Container list',
        type: 'syntax',
        value: 'docker ps',
      },
      {
        id: 2,
        title: 'Logs from container',
        type: 'syntax',
        value: 'docker logs \<container-id\>  -f',
      },
      {
        id: 3,
        title: 'Make migrations',
        type: 'syntax',
        value: 'docker compose exec web python manage.py makemigrations',
      },
      {
        id: 4,
        title: 'Run migrations',
        type: 'syntax',
        value: 'docker compose exec web python manage.py migrate',
      },
      {
        id: 5,
        title: 'Create Super User',
        type: 'syntax',
        value: 'docker compose exec web python manage.py createsuperuser',
      },
    ],
  },
]

const ProjectPage = () => {
  return (
      <div className="px-4">
        <MainCard>
          <h3>
            Name of project
          </h3>
          <ul className="list-none divide-y">
            {
              groups.map(group => (
                  <li key={group.id} className="py-8">
                    <h4>{group.title}</h4>
                    <div className="border-l-2 px-4 mt-8">
                      {
                        group.commands.map(command => (
                            <div key={command.id} className="py-2 space-y-2">
                              <p className="text-gray-600 font-bold text-sm">
                                {command.title}
                              </p>
                              <div>
                                <SyntaxCard
                                    value={command.value}
                                    className="max-w-xl"
                                />
                              </div>
                            </div>
                        ))
                      }
                    </div>
                  </li>
              ))
            }
          </ul>
        </MainCard>
      </div>
  )
}

export default ProjectPage