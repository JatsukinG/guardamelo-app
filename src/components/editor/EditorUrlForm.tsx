import type { FC } from 'react'
import { useState } from 'react'
import { Button, Label, TextInput } from 'flowbite-react'

interface Props {
  onSubmit: (url: string) => void
}


const EditorUrlForm: FC<Props> = ({ onSubmit }) => {
  const [url, setUrl] = useState<string>('')

  return (
      <div className="w-64">
        <Label className="text-xs font-bold" htmlFor="toolbar-item-url-input">
          Url
        </Label>
        <TextInput
            sizing="sm"
            type="text"
            className="mt-1"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            id="toolbar-item-url-input"
            placeholder="Ingresa la url..."
        />
        <Button
            className="mt-4"
            color="purple"
            type="button"
            size="xs"
            onClick={() => url && onSubmit(url)}
        >
          Aceptar
        </Button>
      </div>
  )
}

export default EditorUrlForm