import { Button, Modal, TextInput } from 'flowbite-react'
import NiceModal, { useModal } from '@ebay/nice-modal-react'

const UsersPrivacyModal = NiceModal.create(() => {
  const modal = useModal()

  return (
      <Modal
          size="3xl"
          show={modal.visible}
          onClose={modal.remove}
      >
        <Modal.Header>
          Seleccionar usuarios
        </Modal.Header>
        <Modal.Body>
          <TextInput
              placeholder="Buscar usuarios..."
          />
        </Modal.Body>
        <Modal.Footer>
          <div className="w-full flex justify-end gap-4">
            <Button
                outline
                color="purple"
                onClick={() => modal.remove()}
            >
              Cancelar
            </Button>
            <Button color="purple">
              Guardar
            </Button>
          </div>

        </Modal.Footer>
      </Modal>
  )
})

export default UsersPrivacyModal