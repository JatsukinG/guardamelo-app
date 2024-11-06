import { Button, Modal } from 'flowbite-react'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import CreateProjectForm from '@projects/components/CreateProjectForm'

const CreateProjectModal = NiceModal.create(() => {
  const modal = useModal()

  return (
      <Modal
          show={modal.visible}
          onClose={() => modal.hide()}
      >
        <Modal.Header>
          Crear nuevo proyecto
        </Modal.Header>
        <Modal.Body>
          <CreateProjectForm/>
        </Modal.Body>
        <Modal.Footer>
          <div className="w-full flex gap-2 justify-end">
            <Button color="light" onClick={() => modal.hide()}>
              Cancelar
            </Button>
            <Button color="purple" type="submit" form="create-project-form">
              Crear proyecto
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
  )
})

export default CreateProjectModal