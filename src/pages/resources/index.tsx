import clsx from 'clsx'
import { Blockquote } from 'flowbite-react'
import { MainCard } from '@components'
import ResourcesList from '@resources/components/ResourcesList'

const ResourcesPage = () => {
  return (
      <div className="p-4">
        <MainCard>
          <header className="pb-2 border-b">
            <h1>Recursos Útiles para Desarrolladores</h1>
            <p className="mt-4">
              Explora guías, comandos, y tips esenciales para desarrollar proyectos en diversas tecnologías. Aquí
              encontrarás los recursos que necesitas para potenciar tus habilidades de programación y desarrollo.
            </p>
          </header>
          <div className="mt-12 flex max-xl:flex-col gap-4">
            <ResourcesList/>
            <div className={clsx([
              'w-full xl:w-80 h-fit p-8 rounded-lg',
              'bg-gradient-to-br from-orange-100 to-purple-100',
            ])}>
              <Blockquote>
                <p>
                  "El conocimiento es poder, pero la práctica es la llave que abre sus puertas."
                </p>
                <img
                    alt=""
                    src="/images/gummy-macbook.svg"
                    className="w-full h-auto animate-floating"
                />
              </Blockquote>
            </div>
          </div>
        </MainCard>
      </div>
  )
}

export default ResourcesPage