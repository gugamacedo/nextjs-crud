import { useState } from 'react'
import Client from '../core/Client'
import Button from './Button'
import Input from './Input'

interface FormProps {
  client: Client
  handleClient?: (client: Client) => void
  cancel?: () => void
}

const Form = (props: FormProps) => {
  const [name, setName] = useState(props.client?.name ?? '')
  const [age, setAge] = useState(props.client?.age ?? 0)
  const id = props.client?.id

  return (
    <>
      {id && <Input text="Código" value={id} readOnly={true} />}
      <Input text="Nome" value={name} handleInput={setName} />
      <Input text="Idade" value={age} type="number" handleInput={setAge} />
      <div className='flex justify-end gap-5'>
        <Button color='green' handleAddButton={() => props.handleClient?.(new Client(name, age, id))}>
          {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button color='red' handleAddButton={props.cancel}>
          Cancelar
        </Button>
      </div>
    </>
  )
}

export default Form
