import { MainCard } from '@components'
import { FaClock, FaPlusCircle, FaStar, FaTerminal } from 'react-icons/fa'
import ProjectsList from '@projects/components/ProjectsList'

const cardsData = [
  {
    id: 1,
    title: 'Explorar Comandos',
    description: 'Accede a tu biblioteca de comandos guardados para encontrar rápidamente la sintaxis que necesitas.',
    icon: <FaTerminal/>,
    actionText: 'Ver Comandos',
    link: '/comandos',
  },
  {
    id: 2,
    title: 'Guardar Nuevos Comandos',
    description: 'Guarda comandos y fragmentos de código que usas con frecuencia para tenerlos siempre a la mano.',
    icon: <FaPlusCircle/>,
    actionText: 'Añadir Comando',
    link: '/nuevo-comando',
  },
  {
    id: 3,
    title: 'Organizar Favoritos',
    description: 'Organiza tus comandos favoritos en categorías personalizadas y accede a ellos rápidamente.',
    icon: <FaStar/>,
    actionText: 'Mis Favoritos',
    link: '/favoritos',
  },
  {
    id: 4,
    title: 'Ver Actividad Reciente',
    description: 'Consulta los comandos o recursos añadidos recientemente y tus actividades en la plataforma.',
    icon: <FaClock/>,
    actionText: 'Actividad Reciente',
    link: '/actividad',
  },
]

const HomePage = () => {
  return (
      <div className="px-4">
        <MainCard>
          <div className="mb-12 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {
              cardsData.map(cardData => (
                  <div
                      key={cardData.id}
                      className="p-4 rounded-lg bg-gradient-to-br from-purple-100 to-orange-100 group"
                  >
                    <div className="bg-gradient-to-br from-orange-800 to-purple-500 w-fit rounded-lg p-2 group-hover:scale-110 duration-300">
                      <span className="text-4xl text-white">
                        {cardData.icon}
                      </span>
                    </div>
                    <h3 className="mt-4">{cardData.title}</h3>
                    <p>{cardData.description}</p>
                  </div>
              ))
            }
          </div>
          <h3 className="mb-8">Mis proyectos</h3>
          <ProjectsList/>
        </MainCard>
      </div>
  )
}

export default HomePage