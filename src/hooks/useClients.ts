import { useState } from "react"
import Client from "../core/Client"
import useTable from "./useTable"

export default function useClients() {
  const { isTable, hideTable, showTable } = useTable()
  const [client, setClient] = useState<Client>(Client.empty())

  const clients = [
    new Client('Fulano', 21, 'C1'),
    new Client('Ciclano', 22, 'C2'),
    new Client('Beltrano', 23, 'C3'),
  ]

  const newClient = () => {
    setClient(Client.empty())
    hideTable()
  }
  const saveClient = (client: Client) => {
    showTable()
  }
  const editedClient = (client: Client) => {
    setClient(client)
    hideTable()
  } 
  const deletedClient = (client: Client) => console.log(client)

  return {
    client,
    clients,
    newClient,
    saveClient,
    editedClient,
    deletedClient,
    isTable,
    showTable
  }
}