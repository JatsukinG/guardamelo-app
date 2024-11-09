import { type FormEvent, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import toast from 'react-hot-toast'
import { Spinner } from 'flowbite-react'
import { MdFolder } from 'react-icons/md'
import { useSetRecoilState } from 'recoil'
import { useMutation } from '@apollo/client'
import ProjectsQuery from '@projects/queries/ProjectsQuery'
import showAddProjectStatus from '@projects/atoms/showAddProjectStatus'
import CreateProjectMutation from '@projects/mutations/CreateProjectMutation'

const CreateProjectItem = () => {
  const [value, setValue] = useState('Nuevo proyecto')
  const setShowAddProject = useSetRecoilState(showAddProjectStatus)
  const inputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const [addProject, { loading }] = useMutation(CreateProjectMutation, {
    onCompleted: (data) => {
      if (data.createProject?.project) {
        toast.success('¡El proyecto se ha creado con éxito!')
      }
    },
    onError: (error) => {
      toast.error(error.message)
    },
    //TODO update cache instead of refetch
    refetchQueries: [ProjectsQuery],
  })

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
      inputRef.current.select()
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        handleSubmit()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSubmit = async () => {
    if (value.trim()) {
      await addProject({
        variables: {
          input: {
            name: value,
          },
        },
      })
    }
    setShowAddProject(false)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit()
  }

  return (
      <li className="py-2">
        <form
            ref={formRef}
            onSubmit={onSubmit}
            className={clsx([
              'flex items-center gap-2',
              loading ? 'text-purple-500' : 'text-purple-800',
            ])}>
          {
            loading ? <Spinner color="purple" size="sm"/> : <MdFolder/>
          }
          <input
              autoFocus
              type="text"
              value={value}
              disabled={loading}
              ref={inputRef}
              className={clsx([
                'w-full font-semibold bg-transparent p-0 rounded-md',
                'focus:border-purple-800 focus:ring-purple-800 selection:bg-purple-800 selection:text-white',
                loading && 'border-none focus:border-none',
              ])}
              onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </li>
  )
}

export default CreateProjectItem