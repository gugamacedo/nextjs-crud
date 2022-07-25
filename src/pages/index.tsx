import Layout from '../components/Layout'
import Table from '../components/Table'
import Button from '../components/Button'

import Client from '../core/Client'
import Form from '../components/Form'
import { useState } from 'react'

const Home = () => {
  const clients = [
    new Client('Fulano', 21, 'C1'),
    new Client('Ciclano', 22, 'C2'),
    new Client('Beltrano', 23, 'C3'),
  ]

  const saveClient = (client: Client) => console.log(client)
  const editedClient = (client: Client) => console.log(client)
  const deletedClient = (client: Client) => console.log(client)

  const [isTable, setTable] = useState(true)

  return (
    <div
      className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-purple-500 to-purple-900
      `}
    >
      <Layout title="Cadastro Simples">
        {isTable && (
          <>
            <div className="flex justify-end">
              <Button color="green" handleAddButton={() => setTable(false)}>
                Novo Cliente
              </Button>
            </div>
            <Table clients={clients} editedClient={editedClient} deletedClient={deletedClient} />
          </>
        )}
        {!isTable && (
          <Form 
            client={clients[0]} 
            cancel={() => setTable(true)} 
            handleClient={saveClient}
          />
        )}
      </Layout>
    </div>
  )
}

export default Home
