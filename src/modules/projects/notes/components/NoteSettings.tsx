import { FaLock } from 'react-icons/fa'
import { Avatar, Popover } from 'flowbite-react'
import { PiRadioButton, PiRadioButtonFill } from 'react-icons/pi'
import { BiWorld } from 'react-icons/bi'
import { HiUsers } from 'react-icons/hi'
import NiceModal from '@ebay/nice-modal-react'
import UsersPrivacyModal from '@projects/notes/components/UsersPrivacyModal'

const NoteSettings = () => {
  return (
      <Popover
          content={(
              <div className="max-w-xs p-4 flex flex-col divide-y">
                <div className="py-3 flex items-start gap-4">
                  <span className="text-purple-800 text-xl">
                    <PiRadioButtonFill/>
                  </span>
                  <div className="text-gray-900 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <FaLock/>
                      <span className="font-bold">Privado</span>
                    </div>
                    <span>Solo tu puedes ver este documento</span>
                  </div>
                </div>
                <div className="py-3 flex items-start gap-4">
                  <span className="text-purple-800 text-xl">
                    <PiRadioButton/>
                  </span>
                  <div className="text-gray-900 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <BiWorld/>
                      <span className="font-bold">Publico</span>
                    </div>
                    <span>Cualquier persona con el link</span>
                  </div>
                </div>
                <div className="py-3 flex items-start gap-4">
                  <span className="text-purple-800 text-xl">
                    <PiRadioButton/>
                  </span>
                  <div className="text-gray-900 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <HiUsers/>
                      <span className="font-bold">Parcial</span>
                    </div>
                    <span>Solo los usuarios seleccionados</span>
                    <div className="flex items-end gap-4">
                      <Avatar.Group aria-valuemax={3}>
                        <Avatar
                            stacked
                            rounded
                            size="xs"
                            img="https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <Avatar
                            stacked
                            rounded
                            size="xs"
                            img="https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <Avatar
                            stacked
                            rounded
                            size="xs"
                            img="https://images.unsplash.com/photo-1507499036636-f716246c2c23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        <Avatar.Counter total={5}/>
                      </Avatar.Group>
                      <button
                          className="link"
                          onClick={() => NiceModal.show(UsersPrivacyModal)}
                      >
                        Seleccionar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          )}
      >
        <div className="flex gap-2">
          <button>
            <FaLock/>
          </button>
        </div>
      </Popover>
  )
}

export default NoteSettings